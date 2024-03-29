import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { SessionStorageService } from '../servicios/session-storage/session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  url401 = '';
  reload = 0;
  constructor(
    private router: Router,
    private sessionStorage: SessionStorageService
  ) {}


  /**
   * Función creada para establecer un interceptor de peticiones HTTP, se encarga de comprobar que todas las peticiones que lo necesiten llevan el encabezado de xToken necesario para realizar las peticiones que lo requieran.
   * @param req 
   * @param next 
   * @returns 
   */

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: any = this.sessionStorage.get('xToken');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          xToken: token,
        },
      });
    }

    if (this.reload > 30) {
      setTimeout(() => {
        this.reload = 0;
      }, 10000);
      return EMPTY;
    } else {
      return next.handle(request).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.status === 200) {
            this.url401 = '';
            this.reload = 0;
          }
        }),
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            if (this.url401 == request.url) {
              if (this.reload > 12) {
                this.reload = 0;
              } else {
                this.reload++;
              }
            } else {
              this.url401 = request.url;
              this.reload = 0;
            }

            sessionStorage.removeItem('xToken');
            if (this.router.url == '/login' || this.router.url == '/') {
            } else {
              this.router.navigateByUrl('/login');
            }
          }

          return throwError(err);
        })
      );
    }
  }
}

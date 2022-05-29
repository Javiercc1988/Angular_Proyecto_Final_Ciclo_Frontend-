import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openModal(){
    // this.router.navigate(['/home'])
    const modalRef = this.modalService.open(DialogComponent, {centered: true})
    
    modalRef.componentInstance.modal = {
      titulo: '¡Gracias!',
      subtitulo: 'Te has subscrito a nuestra newsletter.',
      icono: 'fa-solid fa-envelope-circle-check',
      close: true,
      button: true,
      buttonText: 'Aceptar'
    }
  }

}

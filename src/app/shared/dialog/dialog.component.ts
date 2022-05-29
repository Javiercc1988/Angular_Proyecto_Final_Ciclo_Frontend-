import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() modal = {
    titulo: '¡Gracias!',
    subtitulo: 'Su consulta se ha enviado correctamente.',
    icono: 'fa-solid fa-envelope-circle-check',
    close: true,
    button: true,
    buttonText: ''
  };
  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  close(){
    this.modalService.dismissAll()
  }
}

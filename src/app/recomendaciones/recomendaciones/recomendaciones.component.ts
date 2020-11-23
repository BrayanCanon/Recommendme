import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  ngOnInit(): void {
  }
  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  constructor(private modalService: ModalManager){}

  openModal(){
      this.modalRef = this.modalService.open(this.myModal, {
          size: "md",
          modalClass: 'mymodal',
          hideCloseButton: false,
          centered: false,
          backdrop: true,
          animation: true,
          keyboard: false,
          closeOnOutsideClick: true,
          backdropClass: "modal-backdrop"
      })
  }
  closeModal(){
      this.modalService.close(this.modalRef);
      //or this.modalRef.close();
  }
}

import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy,ChangeDetectorRef, Inject  } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { ModeloGeneral } from 'src/app/escoger-favoritos/models/modeloGeneral.module';
import { startWith, tap, delay } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  @Input() resultado: any = [];
  @Output() solicitarResultado = new EventEmitter<any>();
  lista: ModeloGeneral[] = []
  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  resultados: any = []
  resColab: any = []
  colab: any = 0
  constructor(private modalService: ModalManager
   , public dialogRef: MatDialogRef<RecomendacionesComponent>
   , private cdRef:ChangeDetectorRef
   ,@Inject(MAT_DIALOG_DATA) public data:any) { 
    
  }
  ngOnInit(): void {
    this.resultados = this.data.resultado
    this.resColab = this.data.resColab
    this.colab = this.data.colab
    //console.log(this.data.resultado)
  }

  modificarLista()
  {
   // this.lista = this.resultado
  }

  closeDialog()
  {
    this.dialogRef.close();
  }
}

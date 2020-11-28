import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ModeloGeneral } from './models/modeloGeneral.module';
import { NgxSpinnerService } from "ngx-spinner";
import { ModalManager } from 'ngb-modal';
import { RecomendacionesComponent } from '../recomendaciones/recomendaciones/recomendaciones.component';
import { MatDialog } from "@angular/material/dialog";
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-escoger-favoritos',
  templateUrl: './escoger-favoritos.component.html',
  styleUrls: ['./escoger-favoritos.component.css']
})
export class EscogerFavoritosComponent implements OnInit, OnChanges {
  stringPeliculas: string = "Peliculas"
  stringCanciones: string = "Canciones"
  stringLibros: string = "Libros"
  @Input() opcion: string = this.stringPeliculas;
  @Input() solicitarResultado: boolean = false;
  @Output() resultadoFiltrado = new EventEmitter<any>();
  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  infoMostrar: ModeloGeneral[] = []
  condicionOpcion: number = -1
  opcionAux: string = this.stringPeliculas
  peliculasArray: ModeloGeneral[] = []
  resultadoList: ModeloGeneral[] | any = []
  cancionesArray: ModeloGeneral[] = []
  librosArray: ModeloGeneral[] = []
  pageActual: number = 1;
  pageActualResultado: number = 1;
  itemsSelecionados: any[] = []
  userId: number = 0;
  arrUser: any[] = []
  constructor(private services: ServicesService
    , private spinner: NgxSpinnerService
    , private modalService: ModalManager
    , public dialog: MatDialog
    , public overlay: Overlay) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.opcion) {
      this.itemsSelecionados = []
      if (changes.opcion.currentValue == "") {
        changes.opcion.currentValue = this.stringPeliculas
      }
      if (changes.opcion.currentValue == this.stringPeliculas) {
        this.cambiarInfoMostar(0)
      }
      else if (changes.opcion.currentValue == this.stringCanciones) {
        this.cambiarInfoMostar(1)
      }
      else {
        this.cambiarInfoMostar(2)
      }
    }
    if (changes.solicitarResultado) {
      if (changes.solicitarResultado.currentValue != changes.solicitarResultado.previousValue) {
        this.darResultado(changes.solicitarResultado.currentValue)
      }
    }

  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 25000);
    this.getPeliculas();
    this.getCanciones();
    this.getLibros();
    //this.obtenerResultado()
  }

  getPeliculas() {
    this.services.getPeliculas().subscribe(
      data => {
        data.forEach(element => {
          if (element.title != null) {
            element.image = "../../assets/movieIcon.jpg"
            this.peliculasArray.push(element);
          }
        });
      }
    )
  }

  getLibros() {
    this.services.getLibros().subscribe(
      data => {
        data.forEach(element => {
          element.image = "../../assets/bookIcon.jpg"
        });
        this.librosArray = data;
      }
    )
  }

  getCanciones() {
    this.services.getCanciones().subscribe(
      data => {
        data.forEach(element => {
          element.image = "../../assets/songIcon.jpg"
        });
        this.cancionesArray = data;
      }
    )
  }

  filtradoBContenidoPeliculas(title: String, event: any) {
    this.services.filtradoBContenidoPeliculas(title).subscribe(data => {
      data.forEach((element: any) => {
        this.resultadoList.push(element.movie)
      });
    })
  }

  filtradoBContenidoCanciones(song: String, event: any) {
    this.services.filtradoBContenidoCanciones(song).subscribe(data => {
      data.forEach((element: any) => {
        this.resultadoList.push(element.song)
      });
    })
  }

  filtradoBContenidoLibros(libro: String, event: any) {
    this.services.filtradoBContenidoLibros(libro).subscribe(data => {
      data.forEach((element: any) => {
        this.resultadoList.push(element.book)
      });
    })
  }
  cambiarInfoMostar(opcion: number) {
    if (opcion == 0) {
      this.infoMostrar = this.peliculasArray;
      this.condicionOpcion = 0
    }
    else if (opcion == 1) {
      this.infoMostrar = this.cancionesArray;
      this.condicionOpcion = 1
    }
    else {
      this.infoMostrar = this.librosArray;
      this.condicionOpcion = 2
    }
  }

  seleccionarItem(info: any) {
    let element: any = "";
    if (this.opcion == this.stringPeliculas || this.opcion == "") {
      element = info.title
    }
    else if (this.opcion == this.stringCanciones) {
      element = info.song
    }
    else {
      element = info.book_title
    }
    let selectedIndex = this.itemsSelecionados.indexOf(element);
    if (selectedIndex != -1) {
      this.itemsSelecionados.splice(selectedIndex, 1);
      this.encontrarIndex(element, 0);
    }
    else {
      this.itemsSelecionados.push(element);
      this.encontrarIndex(element, 1);
    }

  }

  desseleccionarItem() {
    this.itemsSelecionados.forEach(element => {
      this.encontrarIndex(element, 0);
    });

  }


  encontrarIndex(elemento: string, seleccionado: number) {
    let arrayToMark: any[] = []
    let index = -1;
    if (this.opcion == this.stringPeliculas || this.opcion == "") {
      arrayToMark = this.peliculasArray
      for (let i = 0; i < arrayToMark.length; i++) {
        if (arrayToMark[i].title == elemento) {
          index = i;
        }
      }
    }
    else if (this.opcion == this.stringCanciones) {
      arrayToMark = this.cancionesArray
      for (let i = 0; i < arrayToMark.length; i++) {
        if (arrayToMark[i].song == elemento) {
          index = i;
        }
      }
    }
    else {
      arrayToMark = this.librosArray
      for (let i = 0; i < arrayToMark.length; i++) {
        if (arrayToMark[i].book_title == elemento) {
          index = i;
        }
      }
    }

    if (this.opcion == this.stringPeliculas || this.opcion == "") {
      this.modificarImagenPeliculas(index, seleccionado)
    }
    else if (this.opcion == this.stringCanciones) {
      this.modificarImagenCanciones(index, seleccionado)
    } else {
      this.modificarImagenLibros(index, seleccionado)
    }

  }

  modificarImagenPeliculas(index: number, seleccionado: number) {
    if (seleccionado == 0) {
      this.peliculasArray[index].image = "../../assets/movieIcon.jpg";
    }
    else {
      this.peliculasArray[index].image = "../../assets/seleccionadoMovie.jpg"
    }
  }


  modificarImagenCanciones(index: number, seleccionado: number) {
    if (seleccionado == 0) {
      this.cancionesArray[index].image = "../../assets/songIcon.jpg";
    }
    else {
      this.cancionesArray[index].image = "../../assets/seleccionadoSong.jpg"
    }
  }


  modificarImagenLibros(index: number, seleccionado: number) {
    if (seleccionado == 0) {
      this.librosArray[index].image = "../../assets/bookIcon.jpg";
    }
    else {
      this.librosArray[index].image = "../../assets/seleccionadoBook.jpg"
    }
  }

  darResultado(event: any) {
    this.resultadoList = []
    if (this.opcion == this.stringPeliculas || this.opcion == "") {
      this.itemsSelecionados.forEach(element => {
        this.filtradoBContenidoPeliculas(element, event)
      });
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.openModal(event,0)
        this.spinner.hide();
      }, 25000);
    }
    else if (this.opcion == this.stringCanciones) {
      this.itemsSelecionados.forEach(element => {
        this.filtradoBContenidoCanciones(element, event)
      });
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.openModal(event,0)
        this.spinner.hide();
      }, 25000);
    }
    else {
      this.itemsSelecionados.forEach(element => {
        this.filtradoBContenidoLibros(element, event)
      });
      this.spinner.show();
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.openModal(event,0)
        this.spinner.hide();
      }, 25000);
    }
  }

  openModal(val: MouseEvent, colaborativo: number): void {
    val.stopPropagation();
    let widthModal = 400;
    let heightModal = 450;
    let excludedDate: string = "";
    console.log(this.resultadoList)
    const dialogRef = this.dialog.open(RecomendacionesComponent, {
      disableClose: false,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      width: widthModal.toString() + "px",
      height: (heightModal).toString() + "px",
      backdropClass: 'for-dialog-class',
      position: {
        top: '150px',
        left: '450px'
      },
      data: {
        resultado: this.resultadoList,
        resColab: this.arrUser,
        colab: colaborativo
      }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.itemsSelecionados = []
      if (this.opcion == this.stringPeliculas || this.opcion == "") {
        for (let i = 0; i < this.peliculasArray.length; i++) {
          this.modificarImagenPeliculas(i, 0)
        }
      }
      else if (this.opcion == this.stringCanciones) {
        for (let i = 0; i < this.cancionesArray.length; i++) {
          this.modificarImagenCanciones(i, 0)
        }
      } else {
        for (let i = 0; i < this.librosArray.length; i++) {
          this.modificarImagenLibros(i, 0)
        }
      }
    });
  }

  colaborativoPeliculas(userId: number,event:any) {
    this.services.filtradoColaborativoPeliculas(userId).subscribe(
      data=>
      {
        data.forEach((element:any) => {
          let nombre = element['movie']['title']
          this.arrUser.push(nombre)
        });
        this.openModal(event,1)
      }   
    )
  }

  colaborativoCanciones(userId: number,event:any) {
    this.services.filtradoColaborativoCanciones(userId).subscribe(
      data=>
      {
        data.forEach((element:any) => {
          let nombre = element['song']['song']
          this.arrUser.push(nombre)
        });
        this.openModal(event,1)
      }
    )
  }

  colaborativoLibros(userId: number,event:any) {
    this.arrUser=[]
    this.services.filtradoColaborativoLibros(userId).subscribe(
      data=>
      {
        data.forEach((element:any) => {
          let nombre = element['book']['book_title']
          this.arrUser.push(nombre)
        });
        this.openModal(event,1)
      }
    )
  }

  mostrarRecomendaciones(event:any) {
    if (this.opcion == "" || this.opcion == this.stringPeliculas) {
      
      this.spinner.show();
      this.colaborativoPeliculas(this.userId, event)
      setTimeout(() => {

        //this.openModal(event,1)
        this.spinner.hide();
      }, 13000);
    } else if (this.opcion == this.stringCanciones) {
      this.spinner.show();
      this.colaborativoCanciones(this.userId, event)
      setTimeout(() => {

        //this.openModal(event,1)
        this.spinner.hide();
      }, 20000);
    } else {
      this.spinner.show();
      this.colaborativoLibros(this.userId, event)
      setTimeout(() => {

        //this.openModal(event,1)
        this.spinner.hide();
      }, 25000);
    }
  }

}

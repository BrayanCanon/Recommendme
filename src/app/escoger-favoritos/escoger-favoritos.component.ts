import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ModeloGeneral } from './models/modeloGeneral.module';

@Component({
  selector: 'app-escoger-favoritos',
  templateUrl: './escoger-favoritos.component.html',
  styleUrls: ['./escoger-favoritos.component.css']
})
export class EscogerFavoritosComponent implements OnInit, OnChanges  {
  @Input() opcion: string = "Peliculas";
  infoMostrar: ModeloGeneral[] = []
  condicionOpcion: number = -1
  peliculasArray: ModeloGeneral[] = 
  [
    {
      titulo: "Toy Story",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Buscando a Nemo",
      genero:"Infantil",
      fechaPublicacion:"2003",
      autor: "Pixar",
      duracion:"90",
      resumen:"Buscando a Nemo Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Monster Inc",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Monster Inc Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Mulán",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Mulán",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "La Dama y el Vagabundo",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Toy Story 2",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Buscando a Nemo 2",
      genero:"Infantil",
      fechaPublicacion:"2003",
      autor: "Pixar",
      duracion:"90",
      resumen:"Buscando a Nemo Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Monster Inc 2",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Monster Inc Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Mulán 2",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Mulán",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "La Dama y el Vagabundo 2",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Toy Story 3",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Buscando a Nemo 3",
      genero:"Infantil",
      fechaPublicacion:"2003",
      autor: "Pixar",
      duracion:"90",
      resumen:"Buscando a Nemo Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Monster Inc 3",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Monster Inc Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Mulán 3",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Mulán",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "La Dama y el Vagabundo",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Toy Story4",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Buscando a Nemo 4",
      genero:"Infantil",
      fechaPublicacion:"2003",
      autor: "Pixar",
      duracion:"90",
      resumen:"Buscando a Nemo Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Monster Inc 4",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Monster Inc Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "Mulán 4",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Mulán",
      imagen: "../../assets/movieIcon.jpg"
    },
    {
      titulo: "La Dama y el Vagabundo 4",
      genero:"Infantil",
      fechaPublicacion:"2004",
      autor: "Pixar",
      duracion:"90",
      resumen:"Toy Story Resumen",
      imagen: "../../assets/movieIcon.jpg"
    },
  ]

  cancionesArray: ModeloGeneral[] = 
  [
    {
      titulo: "Yakimoshi no kotae",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/songIcon.jpg"
    },
    {
      titulo: "Ima suki ni naru",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/songIcon.jpg"
    },
    {
      titulo: "Tokyo Summer Session",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/songIcon.jpg"
    },
    {
      titulo: "The day when I know love",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/songIcon.jpg"
    },
    {
      titulo: "Kokuhaku Yokou Renshuu",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.htmlfdsagdfgfsfgdashdfhsfdhsfdga",
      imagen: "../../assets/songIcon.jpg"
    },
  ]

  librosArray: ModeloGeneral[] = 
  [
    {
      titulo: "Yakimoshi no kotae",
      autor: "Honeyworks",
      fechaPublicacion: "2003",
      genero: "sdsad",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/bookIcon.jpg"
    },
    {
      titulo: "Ima suki ni naru",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/bookIcon.jpg"
    },
    {
      titulo: "Tokyo Summer Session",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/bookIcon.jpg"
    },
    {
      titulo: "The day when I know love",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      imagen: "../../assets/bookIcon.jpg"
    },
    {
      titulo: "Kokuhaku Yokou Renshuu",
      autor: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.htmlfdsagdfgfsfgdashdfhsfdhsfdga",
      imagen: "../../assets/bookIcon.jpg"
    },
  ]
  pageActual: number = 1;
  itemsSelecionados: any[] = []
  constructor(private services: ServicesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.opcion.currentValue == "")
    {
      changes.opcion.currentValue ="Peliculas"
    }
    if(changes.opcion.currentValue=="Peliculas")
    {
      this.cambiarInfoMostar(0)
    }
    else if(changes.opcion.currentValue=="Canciones")
    {
      this.cambiarInfoMostar(1)
    }
    else{
      this.cambiarInfoMostar(2)
    }
    //console.log(changes.opcion.previousValue + "-->" +changes.opcion.currentValue)
  }

  ngOnInit(): void {
    this.getCanciones()
  }

  getCanciones()
  {
    this.services.getCanciones().subscribe(
      data =>
      {
        console.log(data)
      }
    )
  }

  cambiarInfoMostar(opcion:number)
  {
    if(opcion == 0)
    {
      this.infoMostrar=this.peliculasArray;
      this.condicionOpcion=0
    }
    else if(opcion == 1)
    {
      this.infoMostrar=this.cancionesArray;
      this.condicionOpcion=1
    }
    else{
      this.infoMostrar=this.librosArray;
      this.condicionOpcion=2
    }
  }

  seleccionarItem(element: any)
  {
    let selectedIndex = this.itemsSelecionados.indexOf(element);
    if(selectedIndex != -1)
    {
      this.itemsSelecionados.splice(selectedIndex,1);
      this.encontrarIndex(element,0);
    }
    else
    {
      this.itemsSelecionados.push(element);
      this.encontrarIndex(element,1);
    }

  }

  encontrarIndex(elemento: string, seleccionado: number)
  {
    let arrayToMark: ModeloGeneral[] = []
    let index = -1;
    if(this.opcion=="Peliculas" || this.opcion=="")
    {
      arrayToMark = this.peliculasArray
    }
    else if(this.opcion=="Canciones")
    {
      arrayToMark = this.cancionesArray
    }
    else
    {
      arrayToMark = this.librosArray
    }
    for(let i=0; i<arrayToMark.length;i++)
    {
      if(arrayToMark[i].titulo == elemento)
      {
        index = i;
      }
    }
    if(this.opcion=="Peliculas" || this.opcion=="")
    {
      this.modificarImagenPeliculas(index,seleccionado)
    }
    else if(this.opcion=="Canciones")
    {
      this.modificarImagenCanciones(index,seleccionado)
    }else
    {
      this.modificarImagenLibros(index,seleccionado)
    }
    
  }

  modificarImagenPeliculas(index:number,seleccionado: number)
  {
    if(seleccionado==0)
    {
      this.peliculasArray[index].imagen = "../../assets/movieIcon.jpg";
    }
    else
    {
      this.peliculasArray[index].imagen = "../../assets/seleccionadoMovie.jpg"
    }
  }

  
  modificarImagenCanciones(index:number,seleccionado: number)
  {
    if(seleccionado==0)
    {
      this.cancionesArray[index].imagen = "../../assets/songIcon.jpg";
    }
    else
    {
      this.cancionesArray[index].imagen = "../../assets/seleccionadoSong.jpg"
    }
  }

  
  modificarImagenLibros(index:number,seleccionado: number)
  {
    if(seleccionado==0)
    {
      this.librosArray[index].imagen = "../../assets/bookIcon.jpg";
    }
    else
    {
      this.librosArray[index].imagen = "../../assets/seleccionadoBook.jpg"
    }
  }

}

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
      title: "Toy Story",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Buscando a Nemo",
      genres:"Infantil",
      releaseDate:"2003",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Buscando a Nemo Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Monster Inc",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Monster Inc Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Mulán",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Mulán",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "La Dama y el Vagabundo",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Toy Story 2",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Buscando a Nemo 2",
      genres:"Infantil",
      releaseDate:"2003",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Buscando a Nemo Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Monster Inc 2",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Monster Inc Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Mulán 2",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Mulán",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "La Dama y el Vagabundo 2",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Toy Story 3",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Buscando a Nemo 3",
      genres:"Infantil",
      releaseDate:"2003",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Buscando a Nemo Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Monster Inc 3",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Monster Inc Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Mulán 3",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Mulán",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "La Dama y el Vagabundo 3",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Toy Story 4",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Buscando a Nemo 4",
      genres:"Infantil",
      releaseDate:"2003",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Buscando a Nemo Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Monster Inc 4",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Monster Inc Resumen",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "Mulán 4",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Mulán",
      image: "../../assets/movieIcon.jpg"
    },
    {
      title: "La Dama y el Vagabundo 4",
      genres:"Infantil",
      releaseDate:"2004",
      production_companies: "Pixar",
      duracion:"90",
      overview:"Toy Story Resumen",
      image: "../../assets/movieIcon.jpg"
    },
  ]

  cancionesArray: ModeloGeneral[] = 
  [
    {
      song: "Yakimoshi no kotae",
      artist: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/songIcon.jpg"
    },
    {
      song: "Ima suki ni naru",
      artist: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/songIcon.jpg"
    },
    {
      song: "Tokyo Summer Session",
      artist: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/songIcon.jpg"
    },
    {
      song: "The day when I know love",
      artist: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/songIcon.jpg"
    },
    {
      song: "Kokuhaku Yokou Renshuu",
      artist: "Honeyworks",
      link: "/r/rascal+flatts/payback_21083231.htmlfdsagdfgfsfgdashdfhsfdhsfdga",
      image: "../../assets/songIcon.jpg"
    },
  ]

  librosArray: ModeloGeneral[] = 
  [
    {
      bookTitle: "Yakimoshi no kotae",
      authors: "Honeyworks",
      publicationDate: "2003",
      bookGenres: "sdsad",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/bookIcon.jpg"
    },
    {
      bookTitle: "Ima suki ni naru",
      authors: "Honeyworks",
      publicationDate: "2003",
      bookGenres: "sdsad",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/bookIcon.jpg"
    },
    {
      bookTitle: "Tokyo Summer Session",
      authors: "Honeyworks",
      publicationDate: "2003",
      bookGenres: "sdsad",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/bookIcon.jpg"
    },
    {
      bookTitle: "The day when I know love",
      authors: "Honeyworks",
      publicationDate: "2003",
      bookGenres: "sdsad",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/bookIcon.jpg"
    },
    {
      bookTitle: "Kokuhaku Yokou Renshuu",
      authors: "Honeyworks",
      publicationDate: "2003",
      bookGenres: "sdsad",
      link: "/r/rascal+flatts/payback_21083231.html",
      image: "../../assets/bookIcon.jpg"
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
        console.log(data[0])
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

  seleccionarItem(info: ModeloGeneral)
  {
    let element:any  = "";
    if(this.opcion=="Peliculas" || this.opcion=="")
    {
      element = info.title
    }
    else if(this.opcion=="Canciones")
    {
      element = info.song
    }
    else
    {
      element = info.bookTitle
    }
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
      for(let i=0; i<arrayToMark.length;i++)
      {
        if(arrayToMark[i].title == elemento)
        {
          index = i;
        }
      }
    }
    else if(this.opcion=="Canciones")
    {
      arrayToMark = this.cancionesArray
      for(let i=0; i<arrayToMark.length;i++)
      {
        if(arrayToMark[i].song == elemento)
        {
          index = i;
        }
      }
    }
    else
    {
      arrayToMark = this.librosArray
      for(let i=0; i<arrayToMark.length;i++)
      {
        if(arrayToMark[i].bookTitle == elemento)
        {
          index = i;
        }
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
      this.peliculasArray[index].image = "../../assets/movieIcon.jpg";
    }
    else
    {
      this.peliculasArray[index].image = "../../assets/seleccionadoMovie.jpg"
    }
  }

  
  modificarImagenCanciones(index:number,seleccionado: number)
  {
    if(seleccionado==0)
    {
      this.cancionesArray[index].image = "../../assets/songIcon.jpg";
    }
    else
    {
      this.cancionesArray[index].image = "../../assets/seleccionadoSong.jpg"
    }
  }

  
  modificarImagenLibros(index:number,seleccionado: number)
  {
    if(seleccionado==0)
    {
      this.librosArray[index].image = "../../assets/bookIcon.jpg";
    }
    else
    {
      this.librosArray[index].image = "../../assets/seleccionadoBook.jpg"
    }
  }

}

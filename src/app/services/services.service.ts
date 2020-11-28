import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ModeloGeneral } from '../escoger-favoritos/models/modeloGeneral.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url: string = "http://144.91.104.30:5001/api/v1/"
  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<ModeloGeneral[]>
  {
    return this.http.get<ModeloGeneral[]>(this.url+'movies');
  }

  getCanciones(): Observable<ModeloGeneral[]>
  {
    return this.http.get<ModeloGeneral[]>(this.url+'songs');
  }

  getLibros(): Observable<ModeloGeneral[]>
  {
    return this.http.get<ModeloGeneral[]>(this.url+'books');
  }

  filtradoBContenidoPeliculas(title:String): Observable<any>
  {
    let body = {"top": 5,"movie": title}
    
    return this.http.post<any>(this.url+'movies/filtering/content', body);
  }

  filtradoBContenidoCanciones(songTitle:String): Observable<any>
  {
    let body = {"top": 5,"song": songTitle}
    
    return this.http.post<any>(this.url+'songs/filtering/content', body);
  }
  
  filtradoBContenidoLibros(bookTitle:String): Observable<any>
  {
    let body = {"top": 5,"book": bookTitle}
    
    return this.http.post<any>(this.url+'books/filtering/content', body);
  }
  
  filtradoColaborativoPeliculas(idUser:any): Observable<any>
  {
    let body = {"id": parseInt(idUser, 10)}
    return this.http.post<any>(this.url+'movies/filtering/collaborative', body);
  }

  filtradoColaborativoCanciones(idUser:any): Observable<any>
  {
    let body = {"id": parseInt(idUser, 10)}
    
    return this.http.post<any>(this.url+'songs/filtering/collaborative', body);
  }

  filtradoColaborativoLibros(idUser:any): Observable<any>
  {
    let body = {"id": parseInt(idUser, 10)}
    
    return this.http.post<any>(this.url+'books/filtering/collaborative', body);
  }
}

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

  getCanciones(): Observable<ModeloGeneral[]>
  {
    return this.http.get<ModeloGeneral[]>(this.url+'songs');
  }
}

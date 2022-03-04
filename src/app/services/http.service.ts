import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //Para realizar las peticiones al servidor --> utilizar un paquete de angular 

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(public http: HttpClient) { }

  getFilms() {
    return this.http.get<any[]>("https://api.themoviedb.org/3/movie/popular?api_key=4db0392a891aeabfb36e3da50366ffa5&language=es-ES");
  }


}

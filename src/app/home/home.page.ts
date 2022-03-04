import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit {

  pelis: any[] = [];
  searchTerm: string;

  constructor(private http: HttpService) { }

  ngOnInit() {

    this.http.getFilms().subscribe(pelis => {

      this.pelis = pelis;

    })
  }

   

  

  traerPeli2 = async () => {

    try {

      const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4db0392a891aeabfb36e3da50366ffa5&language=es-ES&page");
      
      if (respuesta.status === 200) {

        const datos = await respuesta.json();
        let peliculas = '';
        datos.results.forEach(pelicula => {

          peliculas += `
      
           <div class="pelicula" >
             <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
             <h3 class="titulo">${pelicula.title}</h3>
            </div>
          
           `;

        });

        document.getElementById('contenedor').innerHTML = peliculas;
      }
    } catch (error) {
      console.log(error);
    }
  }


  textoBuscar = '';

  buscar(event) {
    this.textoBuscar = event.detail.value; //valor del searchbar
  }



}




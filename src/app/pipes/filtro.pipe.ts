import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {


      texto = texto.toLowerCase();
    arreglo.filter( item => {

      return item.title.toLowerCase().includes(texto);

    });



    return arreglo;
  }

}

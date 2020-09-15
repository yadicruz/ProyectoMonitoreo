import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechas'
})
export class FechasPipe implements PipeTransform {

  transform(items: any[], date:Date, filter: any): any {
    if (!items || !filter) {return items;}
    // filter items array, items which match and return true will be kept, false will be filtered out
    if(typeof(filter) == "string"){
      return items.filter(item => item == filter);
    }else{
      return items.filter(item => item);
    }
   
  }

}

import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrodispositivo1'
})

@Injectable()
export class FiltroDispositivo1Pipe implements PipeTransform {
  transform(items: any[], campo:string, filter: any): any {
    if (!items || !filter) {return items;}
    // filter items array, items which match and return true will be kept, false will be filtered out
    if(typeof(filter) == "number"){
      return items.filter(item => item[campo] == filter);
    }else{
      return items.filter(item => item[campo].indexOf(filter) !== -1);
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: object[],field?:string, query?: string): any {
    //console.log(query)

    if (!value) return null;
    if (!query) return value;
    if(!field) return value;


    return value.filter(function (data:any) {
      return data[field].toLowerCase().includes( query.toLowerCase()
      );
    });
  }

}

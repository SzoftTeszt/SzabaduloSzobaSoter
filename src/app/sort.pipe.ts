import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(tomb:any): any {
    if (!tomb) return null;

    tomb=tomb.sort(
      (a:any,b:any)=>{
        return Number(new Date(b.datum)) -Number(new Date(a.datum))
      }
    )
    return tomb;
  }

}

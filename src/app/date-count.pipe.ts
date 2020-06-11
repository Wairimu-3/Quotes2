import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: any = new Date()
    var dateDifference = Math.abs(today - value)
    const secondsInADay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter:number = dateDifferenceSeconds/secondsInADay;
    if (dateCounter > 1 ) {
      return Math.round(dateCounter);
    } else {
      return 0;
    }
  }
}

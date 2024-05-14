import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter',
  standalone: true
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: string | Date, ...args: unknown[]): string {
    let date: Date;

    if (typeof value === 'string') {
      date = new Date(value);
    } else {
      date = value;
    }

    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    const formattedDate = 
      (mm < 10 ? '0' : '') + mm + '/' +
      (dd < 10 ? '0' : '') + dd + '/' + 
      yyyy;
      
    return formattedDate;
  }

}

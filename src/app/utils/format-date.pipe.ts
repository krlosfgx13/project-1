import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: Date) {
    let year = value.getUTCFullYear();
    let month;
    let day = value.getUTCDate();

    switch (value.getUTCMonth() + 1) {
      case 1:
        month = "January"
        break;

      case 2:
        month = "February"
        break;

      case 3:
        month = "March"
        break;

      case 4:
        month = "April"
        break;

      case 5:
        month = "May"
        break;

      case 6:
        month = "June"
        break;

      case 7:
        month = "July"
        break;

      case 8:
        month = "August"
        break;

      case 9:
        month = "September"
        break;

      case 10:
        month = "October"
        break;

      case 11:
        month = "November"
        break;

      case 12:
        month = "December"
        break;
    }

    let days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]

    let dayName = days[value.getDay()];

    return `${dayName} ${day}th ${month} of ${year}`;
  }
}

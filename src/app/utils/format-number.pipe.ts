import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, currency: string) {
    return currency + new Intl.NumberFormat().format(value);
  }
}

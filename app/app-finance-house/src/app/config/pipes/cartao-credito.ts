import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CartaoCreditoPipe'
})
export class CartaoCreditoPipe implements PipeTransform {

  transform(day: number): string {
    return day.toString().padStart(2, '0');
  }
}

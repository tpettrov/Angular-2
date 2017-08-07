/**
 * Created by Toni on 8/7/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class DatePipe implements PipeTransform {
  transform(value: Date) {
    return value.toLocaleDateString() + ' |Locale Date String Pipe|';
  }
}

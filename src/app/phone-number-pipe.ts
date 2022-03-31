import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform{
  transform(phoneNumber: number): string {
    return '0' + phoneNumber.toString().slice(0, 2) + '-' + phoneNumber.toString().slice(3);
  }
}

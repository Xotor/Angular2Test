import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: string, suffix: string): string {
    let erg: string = "";
    if(value && suffix){
      erg = value.toUpperCase()+suffix;
    }
    return erg;
  }

}

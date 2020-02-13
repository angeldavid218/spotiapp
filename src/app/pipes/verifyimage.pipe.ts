import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verifyimage'
})
export class VerifyimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/img/banner-ico.png';
    }
    if (images.length > 0) {
      return images[0].url;
    }
    
    return 'assets/img/banner-ico.png';
  }

}

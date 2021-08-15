import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  constructor() { }

  public publicatePost(): void {
    console.log('on publication service =D');
  }
}

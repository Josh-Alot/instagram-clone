import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadProgressService {
  public status!: string;
  public uploadState: any;
  
  constructor() { }
}

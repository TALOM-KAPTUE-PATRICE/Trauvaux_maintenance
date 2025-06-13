import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {


  userData:any;
  private API_URL = environment.API_URL;
  constructor(private HttRequest: HttpClient) { }

  getUserdata(){
    this.userData=[
      {
        'name': 'talom',
        'email':'talom@gmail.com',
      },
      {
        'name': 'tobou',
        'email':'tobou@gmail.com',
      }
    ];

  }

  getDataFormUrl(){

    return this.HttRequest.get(this.API_URL+'student');
  }
}

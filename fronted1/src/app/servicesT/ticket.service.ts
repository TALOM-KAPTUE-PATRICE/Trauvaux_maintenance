import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
   private apiUrl='http://localhost:8000';

  private crsfToken: string='';
  constructor(private http:HttpClient) {
    //this.fetchCsrfToken();
  }

  printTicket(ticketID: number){
      const url ='${this.apiUrl}/tickets/${ticketID}/print';
      return this.http.get(url,{responseType:'blob'});
  }

//  private fetchCsrfToken(): void{
//     this.http.get<any>('http://localhost:8000/csrf-token').subscribe(res=>{
//       this.crsfToken = res.csrf_token;
//     })
//  }

 getCsrfToken(): string{
   return this.crsfToken
 }

}

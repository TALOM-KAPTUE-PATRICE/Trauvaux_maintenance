import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { application, response } from 'express';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import {  Observable, of, tap, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { resolve } from 'path';
import { TicketService } from '../servicesT/ticket.service';
import { Blob } from 'buffer';
import { MatDialog } from '@angular/material/dialog';
import { FormTicketComponent } from '../form-ticket/form-ticket.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  
  tickets:any;
  clients:any;
  err:any;
  msg1:string='';
  message:string='';
  isSucces:boolean=false;
  users:any;
  ticketForm:FormGroup= new FormGroup({});
  ticketFormVisible: boolean=false;
  constructor(private Http:HttpClient, private formbuilder:FormBuilder,private ti: TicketService,private _dialog:MatDialog ){

    this.ticketForm= this.formbuilder.group({
        title:['', Validators.required],
        description:['', Validators.required],
        datetime:['', Validators.required],
        client_id:['', Validators.required],
        user_id:['', Validators.required],
     });
 }

  ngOnInit(): void {
     this.Http.get('http://127.0.0.1:8000/'+ 'tickets').subscribe(res=>{
         this.tickets=res;
     });


  }

  openTicketForm(){
    //reinitialiser le formulaire lorsqu'ilest ouvert
     this.ticketForm.reset();
    //afficher ou masquer le formulaire de creation de ticket
    this.ticketFormVisible= false;
    const delay=1000;
    const promise = new Promise<void>((resolve)=>{
      setTimeout(()=>{
        resolve();
      },delay);
    });
    promise.then(()=>{
      this.ticketFormVisible=true;
    });

    }

    createTicket(){
      if(this.ticketForm.valid){
        const headers= new HttpHeaders({
          'Content-type':'apllication/json',
          'X-CSRF-TOKEN':this.ti.getCsrfToken()
        });
        this.Http.post('http://127.0.0.1:8000/'+'ticketData',this.ticketForm.value).pipe(tap((response:any)=>{
          this.message=response.success ? 'insertion reussie':'Echec d\'insertion';
          this.isSucces=response.succes;
       }),
       catchError((error)=>{
         this.message='Erreur lors de l\' insertion';
         this.isSucces=false;
         return of(null);
       })
       ).subscribe(()=>{

       });

       }else{
        this.msg1="remplissez tout les chmaps";
       }


    }
    openAddEditTicketForm(){
      this._dialog.open(FormTicketComponent);
    }

    editTicket(ticketID:number){
      this._dialog.open(EditComponent);
    }


    deleteTicket(ticketID:number){
      if(confirm('Etes-vous sur de voiloir supprimer ce ticket?')){
        const url = 'http://localhost:8000/delTickets/'+ticketID;
        this.Http.delete(url).pipe( catchError((error: any):Observable<never> => {

            console.error('une erreur c\'est priuite lors de la suppression',error);
               return throwError('une erreur');
          })
          ).subscribe(
            ()=>{
              console.log('ticket supprimer');
              this.Http.get('http://127.0.0.1:8000/'+ 'tickets').subscribe(res=>{
              this.tickets=res;
            });
            }
          )


      }

    }

    impression(ticketID:number){
        this.Http.get('http://127.0.0.1:8000/impression/'+ ticketID,{ responseType:'blob', }).subscribe((response: any) =>{
               const fileUrl=URL.createObjectURL(response);
               window.open(fileUrl,'_blank');


        });


    }
}


   //  this.ticketService.printTicket(ticketID).subscribe(res=>{
      //      const blob = new Blob([res],{type:'application/pdf'});
      //      const urlCreator= window.URL || window.webkitURL;
      //      const pdfUrl= urlCreator.createObjectURL(blob);
      //      window.open(pdfUrl);
      //      console.log('Ticket imprimer avec success');
      //  });

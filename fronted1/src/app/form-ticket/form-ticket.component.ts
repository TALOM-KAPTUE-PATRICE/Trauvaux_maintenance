import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { error } from 'console';
import { catchError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {  Observable, of, tap, throwError } from 'rxjs';
@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrl: './form-ticket.component.css'
})
export class FormTicketComponent implements OnInit{
  ticketForm:FormGroup= new FormGroup({});
  tickets:any;
  clients:any;
  bool:boolean=false;
  users:any;
  isSucces:boolean=false;
  message:any;
  msg1:any;
  ngOnInit(): void {

  this.Http.get('http://127.0.0.1:8000/' + 'clients').subscribe(res=>{
      console.log(res);
      this.clients=res;
  });
  this.Http.get('http://127.0.0.1:8000/' + 'users').subscribe(res=>{
     this.users=res;
     console.log(res);
});
  }

  constructor(private Http:HttpClient, private formbuilder:FormBuilder,private _dialog:MatDialog ){

    this.ticketForm= this.formbuilder.group({
        title:['', Validators.required],
        description:['', Validators.required],
        datetime:['', Validators.required],
        client_id:['', Validators.required],
        user_id:['', Validators.required],
     });
 }

 createTicket(){
  if(this.ticketForm.valid){
    
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
    this.bool= true
    this.msg1="remplissez tout les champs";
   }

 }

}

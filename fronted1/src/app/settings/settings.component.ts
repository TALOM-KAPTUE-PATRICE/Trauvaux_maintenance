import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { FormGroup,FormBuilder } from '@angular/forms';
import { catchError,of,tap } from 'rxjs';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {
  ticketForm:FormGroup= new FormGroup({});
  message:any;
  isSucces:any;
  msg1:any;
  tickets:any;

  constructor(private Http:HttpClient, private formbuilder:FormBuilder ){
    this.ticketForm= this.formbuilder.group({
        designation:['', Validators.required],
        quantite:['', Validators.required],
        prix:['', Validators.required],
        ticket_id:['', Validators.required],
     });
 }
 ngOnInit(): void {
    this.Http.get('http://127.0.0.1:8000/'+ 'tickets').subscribe(res=>{
      console.log(res);
      this.tickets = res;
});
 }

 createBesoin(){

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
    this.msg1="remplissez tout les chmaps";
   }

 }
}

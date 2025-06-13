import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, of, tap, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PagesComponent } from '../pages/pages.component';
import { SettingsComponent } from '../settings/settings.component';
@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrl: './besoin.component.css'
})
export class BesoinComponent implements OnInit {
    result:any;
   constructor(private http:HttpClient, private _dialog:MatDialog){

   }
   openAddEditBesoinForm(){
    this._dialog.open(SettingsComponent);
   }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/besoin').subscribe(res=>{
        console.log(res);
      this.result= res;
    });
 }
 editBesoin(beoinIB:number){}
  deleteBesoin(besoinID:number){
    if(confirm('etes-vous de vouloir supprimer le besoin')){
  const url = 'http://localhost:8000/delBesoin/'+ besoinID;
  this.http.delete(url).pipe( catchError((error: any):Observable<never> => {

      console.error('une erreur c\'est priuite lors de la suppression',error);
         return throwError('une erreur');
    })
    ).subscribe(
      ()=>{
        console.log('besoin supprimer');
        this.http.get('http://localhost:8000/besoin').subscribe(res=>{
          console.log(res);
        this.result= res;
      });
      }
    )
  }
 }
}

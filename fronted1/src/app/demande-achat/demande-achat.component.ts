import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demande-achat',
  templateUrl: './demande-achat.component.html',
  styleUrl: './demande-achat.component.css'
})
export class DemandeAchatComponent implements OnInit {

  Demande:any;
   constructor(private http:HttpClient){}
   ngOnInit(): void {
       this.http.get('http://127.0.0.1:8000/'+ 'da').subscribe(res=>{
            console.log(res);
            this.Demande=res;
       });
   }

  editDa(idDA:number){}
  deleteDa(idDA:number){}
  impressionDa(idDA:number){}

}

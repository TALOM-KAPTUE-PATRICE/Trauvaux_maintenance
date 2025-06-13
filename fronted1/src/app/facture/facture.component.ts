import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrl: './facture.component.css'
})
export class FactureComponent implements OnInit{

 factures:any;

  public constructor(private Http:HttpClient){}
  ngOnInit(): void {
    this.Http.get('http://localhost:8000/'+ 'facture').subscribe(res=>{
      
       console.log(res);
       this.factures=res;
  });
  }
}

import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent implements OnInit{
commande:any;
  constructor(private Http:HttpClient){}

  ngOnInit(): void {
    this.Http.get('http://localhost:8000/'+ 'commande').subscribe(res=>{
      console.log(res);
      this.commande=res;
  });
  }
  editTicket(id:number){}
  deleteTicket(id:number){}
  impression(id:number){}
}

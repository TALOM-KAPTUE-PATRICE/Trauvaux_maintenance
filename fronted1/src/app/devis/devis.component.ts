import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.css'
})
export class DevisComponent implements OnInit {
devis:any;
  constructor(private Http: HttpClient){}
  ngOnInit(): void {
     this.Http.get('http://127.0.0.1:8000/'+ 'devis').subscribe(res=>{
        console.log(res);
        this.devis=res;
    });
   }
   editDevis(idDevis:number){

   }
   deleteDevis(idDevis:number){

   }
   impression(idDevis:number){
    this.Http.get('http://127.0.0.1:8000/impressionD/'+ idDevis,{ responseType:'blob', }).subscribe((response: any) =>{
    const fileUrl=URL.createObjectURL(response);
    window.open(fileUrl,'_blank');


});

   }
}

import { Component,OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

 userdata1:any;
 userdata2:any;
  constructor(
    private userdata: UserdataService
  ){}
   ngOnInit(): void {
    this.userdata1 = this.userdata.getUserdata();
    console.log( this.userdata1);
    this.showApiData();
  }

  showApiData(){
      this.userdata.getDataFormUrl().subscribe( res=>{
          console.log(res);
          this.userdata2=res;
      });
  }
  addStudent(){
    
  }

}




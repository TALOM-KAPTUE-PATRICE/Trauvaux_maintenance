import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { error } from 'console';
import { FormGroup,FormBuilder,Validators,AsyncValidatorFn,AbstractControl,ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent implements OnInit {
  loginForm:FormGroup=new FormGroup({});
  loginError:string='';
  placeHolderup:boolean=false;
  monFormulaire:FormGroup=new FormGroup({});
  inputFocused: {[key:string]:boolean}={};

   constructor(private http: HttpClient,private formbuilder: FormBuilder,private router:Router){
     this.monFormulaire=this.formbuilder.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
     });
   }
   ngOnInit(): void {

   }

   onFocus(){
   this.placeHolderup=true;
   }
   onBlur(){
    this.placeHolderup=false;
    }


   onSubmit(){

     if(this.monFormulaire.valid){
      console.log(this.monFormulaire);

      this.http.post<any>('http://localhost:8000/api/login',this.monFormulaire.value).pipe(catchError((error:any):Observable<never>=>{

           this.loginError= error.error.message;
           return throwError('une erreur c\'est produit lors de la connexion');

        })).subscribe(
           (response)=>{
            localStorage.setItem('token', response.token);
            localStorage.setItem('user',JSON.stringify(response.user));
           console.log(response);
           this.router.navigate(['/dashbord']);
        });

     }else{
       this.monFormulaire.markAllAsTouched();
     }



   }
  //  uniqueEmailValidator():AsyncValidatorFn{
  //    return (_control:AbstractControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null> =>{

  //    }
  //  }

}

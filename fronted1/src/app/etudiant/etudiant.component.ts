import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css',
})
export class EtudiantComponent {
   etudiant:FormGroup= new FormGroup({});
   donnees:any[] = [];


   constructor(private buil:FormBuilder){
     this.etudiant = this.buil.group({
       nom:['' ,Validators.required],
       prenom:['',Validators.required],
       email:['',Validators.required]
     });
   }

   create(){
      if(this.etudiant.valid){
        
         const nom = this.etudiant.get('nom')?.value;
         const prenom= this.etudiant.get('prenom')?.value;
         const email = this.etudiant.get('email')?.value;

         const nouvelEtudiant={
           nom:nom,
           prenom:prenom,
           email:email
         };
         this.donnees.push(nouvelEtudiant);
         this.etudiant.reset();

      }
   }



}

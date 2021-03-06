import { Component, OnInit } from '@angular/core';
import {UserserviceService} from'../shared';
import{ UserDetails } from '../shared';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [UserserviceService]

})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    signupForm:FormGroup;
    user: UserDetails = new UserDetails();
   

    constructor(private userserviceService:UserserviceService,private fb:FormBuilder,private router:Router) { }

    ngOnInit() {
        this.signupForm=this.fb.group(
        {
          email:['',Validators.required],
          password:['',Validators.required],
          confirmpassword:['',Validators.required],
          name:['',Validators.required],
          education:['',Validators.required]
  
        }
      );
  }

    onSubmit() {
      if(this.signupForm.invalid){
        return;
      }
      else{

        this.user.userEmail=this.signupForm.get("email").value;
        this.user.userPassword=this.signupForm.get("password").value;
        this.user.userName=this.signupForm.get("name").value;
        this.user.userEducation=this.signupForm.get("education").value;
        this.user.status="active";
        this.user.role="user";


        if(this.signupForm.get("password").value==this.signupForm.get("confirmpassword").value){
        this.userserviceService.addUser(this.user).subscribe(()=>{
         alert("Success!!");
         this.router.navigateByUrl("/login");
        });}
        else{
          alert("Password Mismatch");
        }
      }
        };
}

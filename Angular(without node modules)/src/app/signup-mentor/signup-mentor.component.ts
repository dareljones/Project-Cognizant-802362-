import { Component, OnInit } from '@angular/core';
import { ServiceService, MentorserviceService, Mentordetails } from '../shared';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-mentor',
  templateUrl: './signup-mentor.component.html',
  styleUrls: ['./signup-mentor.component.css']
})
export class SignupMentorComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  focus2;
  signupForm:FormGroup;
  user: Mentordetails = new Mentordetails();

  temp:Array<any>;



  constructor(private serviceService:ServiceService,private mentorserviceService:MentorserviceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.serviceService.getAll().subscribe(data=>{this.temp=data;},error=>console.log(error))
    this.signupForm=this.fb.group(
      {
        email:['',Validators.required],
        password:['',Validators.required],
        confirmpassword:['',Validators.required],
        name:['',Validators.required],
        experience:['',Validators.required],
        url:['',Validators.required]

      }
    );

  }

  onSubmit() {
    console.log("hi");
    if(this.signupForm.invalid){
      return;
    }
    else{

      this.user.userEmail=this.signupForm.get("email").value;
      this.user.userPassword=this.signupForm.get("password").value;
      this.user.userName=this.signupForm.get("name").value;
      this.user.userExperience=this.signupForm.get("experience").value;
      this.user.userUrl=this.signupForm.get("url").value;

      this.user.status="active";
      this.user.role="mentor";


      if(this.signupForm.get("password").value==this.signupForm.get("confirmpassword").value){
      this.mentorserviceService.addMentor(this.user).subscribe(()=>{
       alert("Success!!");
       this.router.navigateByUrl("/login");
      });}
      else{
        alert("Password Mismatch");
      }
    }
      };
}


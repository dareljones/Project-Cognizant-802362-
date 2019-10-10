import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import {UserserviceService, MentorserviceService, Mentordetails} from'../shared';
import{ UserDetails } from '../shared';
import {LocalsessionService} from '../shared/localsession.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserserviceService,MentorserviceService]

})
export class LoginComponent implements OnInit {
  temp:String;
  uname:string;
  focus;
  focus1;
  role="mentor";
loginForm:FormGroup;
loading = false;
    submitted = false;

  user: UserDetails = new UserDetails();
  mentor:Mentordetails=new Mentordetails();

  constructor(public router: Router,private fb:FormBuilder,private userserviceService:UserserviceService,private mentorserviceService:MentorserviceService,private localStorageService: LocalsessionService) { }

  ngOnInit() {
    this.loginForm=this.fb.group(
      {
        email:['',Validators.required],
        password:['',Validators.required],

      }
    );

   

  }
  onSubmit() {
    if(this.role=="user"){
    this.submitted = true;
    this.userserviceService.getAll(this.loginForm.get("email").value).subscribe(data =>{this.user=data;
    });


    if(this.loginForm.invalid){
      return;
    }
    else if(this.user==undefined){
      alert("User does not exist");
    }
else if(this.user.status=="blocked"){
  alert("You have been blocked by the Admin");
}
    
   
else {
  if(this.loginForm.get("password").value==this.user.userPassword){
  this.localStorageService.storeOnLocalStorage(this.user);
  this.router.navigateByUrl("/userlanding");
  }
  else{
alert("Wrong Password");  }
  }
}
else if(this.role=="mentor"){
  this.submitted = true;
  this.mentorserviceService.getAll(this.loginForm.get("email").value).subscribe(data =>{this.mentor=data;
  });


  if(this.loginForm.invalid){
    return;
  }
  else if(this.mentor==undefined){
    alert("User does not exist");
  }
else if(this.mentor.status=="blocked"){
alert("You have been blocked by the Admin");
}
  
 
else 
{if(this.loginForm.get("password").value==this.mentor.userPassword){
this.localStorageService.storeOnLocalStorage(this.mentor);
this.router.navigateByUrl("/mentorlanding");
}
else{
alert("Wrong Password");  }
}
}


  }
  

}


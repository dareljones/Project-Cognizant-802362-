import { Component, OnInit } from '@angular/core';
import technologies from '../../assets/technologies.json';
import { FormGroup, FormBuilder,Validators } from '@angular/forms'
import { ServiceService, Course } from '../shared/index.js';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ServiceService]

})
export class AdminComponent implements OnInit {
  tech=technologies.tech;
  form:FormGroup;
  course:Course=new Course();
  temp:Array<any>;

  constructor(private serviceService:ServiceService,private fb:FormBuilder) {
    
 
 }

  ngOnInit() {
   this.get();
    this.form=this.fb.group(
      {
        add:['',Validators.required]
      }
    );

  }
remove(techName:string){
  this.serviceService.removeTech(techName).subscribe(()=>{
    alert("Removed Successfully");
    this.get();
  });
}
get(){
  this.serviceService.getAll().subscribe(data=>{this.temp=data;},error=>console.log(error));
}
add(){
  this.course.techName=this.form.get("add").value;
this.serviceService.addTech(this.course).subscribe(()=>{
  alert("Added Successfully");
  this.get();
});

}

}

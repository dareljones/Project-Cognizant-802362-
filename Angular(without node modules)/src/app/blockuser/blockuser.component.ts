import { Component, OnInit } from '@angular/core';
import { UserserviceService, UserDetails } from '../shared';

@Component({
  selector: 'app-blockuser',
  templateUrl: './blockuser.component.html',
  styleUrls: ['./blockuser.component.css'],
  providers: [UserserviceService]

})
export class BlockuserComponent implements OnInit {
  user: UserDetails []=[];
  blockeduser: UserDetails []=[];


  constructor(private userserviceService:UserserviceService) { }

  ngOnInit() {
    this.getactiveusers();
    this.getblockedusers();
  }

  block(status:string){
this.userserviceService.block(status).subscribe(data =>{alert("Success")});
this.getactiveusers();
this.getblockedusers();

  }
  getactiveusers(){
    this.userserviceService.getAllUsers2("active").subscribe(data =>{this.user=data;
    });
  }

  getblockedusers(){
    this.userserviceService.getAllUsers2("blocked").subscribe(data =>{this.blockeduser=data;
    });
  }

}

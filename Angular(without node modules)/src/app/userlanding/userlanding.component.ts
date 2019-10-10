import { Component, OnInit } from '@angular/core';
import {LocalsessionService} from '../shared/localsession.service';


@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.css']
})
export class UserlandingComponent implements OnInit {
  username:string;
  focus;
  focus1;
  constructor(private localStorageService: LocalsessionService) { }

  ngOnInit() {
  }

}

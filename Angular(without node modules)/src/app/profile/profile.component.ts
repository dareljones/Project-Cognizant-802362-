import { Component, OnInit } from '@angular/core';
import {LocalsessionService} from '../shared/localsession.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
data:any;
    constructor(private localStorageService: LocalsessionService) { }

    ngOnInit() {
        this.data=this.localStorageService.another;

    }

}

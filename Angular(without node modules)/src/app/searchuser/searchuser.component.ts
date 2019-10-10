import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import technologies from '../../assets/technologies.json';
import { ServiceService } from '../shared/index.js';


@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {
  temp:Array<any>;

  fromDate: NgbDate;
  toDate: NgbDate;
  hoveredDate: NgbDate;
  model1 : NgbDate;
  model2 : NgbDate;
  
  focus;
  focus1;
  focus2;
  focus3;
  focus4;
  constructor(private calendar: NgbCalendar,private serviceService:ServiceService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }




  isRangeStart(date: NgbDate){
    return this.model1 && this.model2 && date.equals(this.model1);
  }
  isRangeEnd(date: NgbDate){
    return this.model1 && this.model2 && date.equals(this.model2);
  }
  isInRange(date: NgbDate){
    return date.after(this.model1) && date.before(this.model2);
  }
  isActive(date: NgbDate){
    return date.equals(this.model1) || date.equals(this.model2);
  }
  endDateChanged(date){
    if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day )) {
      this.model1 = this.model2;
    }
  }
  startDateChanged(date){
    if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day )) {
      this.model2 = this.model1;
    }
  }
  ngOnInit() {
    this.serviceService.getAll().subscribe(data=>{this.temp=data;},error=>console.log(error))

  }

  }

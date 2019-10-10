import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:9000/api/course/getcourse/');
  }

   public addTech (tech: Course):Observable<void> {
    return this.http.post<void>('http://localhost:9000/api/course/addTechnology/',tech);
  }

  removeTech(tech:string){
    return this.http.get<void>('http://localhost:9000/api/course/deleteTechnology/'+tech);

  }
 
}

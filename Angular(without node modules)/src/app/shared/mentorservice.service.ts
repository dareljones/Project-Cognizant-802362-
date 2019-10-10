import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ Mentordetails } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class MentorserviceService {

  constructor(private http: HttpClient) { }
  getAll(uname:string): Observable<Mentordetails> {
    
    return this.http.get<Mentordetails>('http://localhost:9000/api/mentor/getMentor/'+uname);
  }

  public addMentor (mentor: Mentordetails):Observable<void> {
    return this.http.post<void>('http://localhost:9000/api/mentor/addMentor/',mentor);
  }
}

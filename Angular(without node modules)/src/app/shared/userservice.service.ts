import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ UserDetails } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  constructor(private http: HttpClient) {}

  getAll(uname:string): Observable<UserDetails> {
    
    return this.http.get<UserDetails>('http://localhost:9000/api/user/getUser/'+uname);
  }

  public addUser (user: UserDetails):Observable<void> {
    return this.http.post<void>('http://localhost:9000/api/user/addUser/',user);
  }

  getAllUsers(): Observable<UserDetails[]> {
    
    return this.http.get<UserDetails[]>('http://localhost:9000/api/user/getAllUsers/');
  }
  getAllUsers2(role:string): Observable<UserDetails[]> {
    
    return this.http.get<UserDetails[]>('http://localhost:9000/api/user/getAllUsers/'+role);
  }

  block(uname:string):Observable<void> {
    console.log(uname);
    return this.http.get<void>('http://localhost:9000/api/user/blockUser/'+uname);
  }
}

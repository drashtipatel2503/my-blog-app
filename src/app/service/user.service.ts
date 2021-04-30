import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from './user'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string="http://localhost:3000";
  private headers= new HttpHeaders().set('Content-Type','application/json')

  constructor(private http:HttpClient) { }

  createUser(user:User){
    return this.http.post(this.url+'/api/user/create',user,{headers:this.headers})
  }
  readUser(){
    return this.http.get(this.url+'/api/user',{headers:this.headers})
  }

  

}

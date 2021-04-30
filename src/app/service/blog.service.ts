import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from './blog' 

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  private url:string="http://localhost:3000";
  private headers= new HttpHeaders().set('Content-Type','application/json')

  constructor(private http:HttpClient) { }

  
  createBlog(blog:Blog){
    return this.http.post(this.url+'/api/blog/create',blog,{headers:this.headers})
  }
  readBlog(){
    return this.http.get(this.url+'/api/blog',{headers:this.headers})
  }

}


  
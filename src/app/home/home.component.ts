import { Component, OnInit } from '@angular/core';

import { BlogService } from '../service/blog.service';
import { Blog } from '../service/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private blogs:Blog;

  p=[]

  constructor(private bs:BlogService) { }

  ngOnInit(): void {
    this.readBlog();
  }
  readBlog(){
    this.bs.readBlog().subscribe(
      (data:any[])=>{
        this.p=data
        console.log(data)
      },
      error=>{
        console.log(error)
      }
    )

  }
}     
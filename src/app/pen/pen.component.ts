import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-pen',
  templateUrl: './pen.component.html',
  styleUrls: ['./pen.component.scss']
})
export class PenComponent implements OnInit {


    blog={
      title:'',
      content:'',
      w_id:localStorage.getItem('name')
    };
    constructor( private bs: BlogService, private router:Router) { }
  
    ngOnInit(): void {
    }
    addblog():void{
      const data={
        title: this.blog.title,
        content:this.blog.content,
        w_id:this.blog.w_id,
      }
      this.bs.createBlog(data).subscribe(
        response=>{
          console.log(response)
          console.log(response['_id'])
          
          this.router.navigate(['/home'])
  
        },
        errolr=>{
          console.log(errolr)
        }
      )
    }
  
  }
  

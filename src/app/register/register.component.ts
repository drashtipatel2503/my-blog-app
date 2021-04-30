import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../service/user'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user={
    name:'',
    email:'',
    password:''
  };
  constructor( private us: UserService, private router:Router) { }

  ngOnInit(): void {
  }
  saveUser():void{
    const data={
      name: this.user.name,
      email:this.user.email,
      password:this.user.password,
    }
    this.us.createUser(data).subscribe(
      response=>{
        console.log(response)
        console.log(response['_id'])
        console.log(data.name)
        console.log(data.email)
        localStorage.setItem('name', data.name)
        localStorage.setItem('uid',response['_id'])
        this.router.navigate(['/land'])

      },
      errolr=>{
        console.log(errolr)
      }
    )
  }

}

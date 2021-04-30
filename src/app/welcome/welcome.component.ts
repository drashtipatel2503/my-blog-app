import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../service/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private users:User;

  p=[]
  constructor( private us:UserService) { }

  ngOnInit(): void {

    this.readUser();
  }
  readUser(){
    this.us.readUser().subscribe(
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

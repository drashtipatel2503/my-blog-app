import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.scss']
})
export class LandComponent implements OnInit {
  p=localStorage.getItem('name')
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.p)
  }
  movetopen(){
    this.router.navigate(['./pen'])
  }
  movetohome(){
    this.router.navigate(['./home'])
  }

  
}

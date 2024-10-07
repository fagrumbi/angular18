import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {


  constructor(private route: Router){}

  nextpage(){
    console.log("page render successfully");
    this.route.navigate([`/home`]);
    
  }

}

import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AccountListComponent } from "../account-list/account-list.component";
import { CreateAccountComponent } from "../create-account/create-account.component";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../common/header/header.component";
import { FooterComponent } from "../common/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AccountListComponent, CreateAccountComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(){}

  activeSection: string = 'account'; 

  setActive(section: string): void {
    this.activeSection = section;
  }
  

}

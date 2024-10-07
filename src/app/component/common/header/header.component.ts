import { Component } from '@angular/core';
import { AccountListComponent } from "../../account-list/account-list.component";
import { CreateAccountComponent } from "../../create-account/create-account.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AccountListComponent, CreateAccountComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  activeSection: string = 'account'; // Default section to show

  setActive(section: string) {
    this.activeSection = section;
  }

}

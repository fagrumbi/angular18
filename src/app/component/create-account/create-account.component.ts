import { Component } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { Account } from '../../account';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  accounts: Account = new Account();
  createAccount = false;

  constructor(private accountService: AccountService) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.saveAccount();
    }
  }

  saveAccount() {
    this.accountService.createAccount(this.accounts).subscribe(data => {
      this.createAccount = true;
      console.log(data);
    });
  }

}

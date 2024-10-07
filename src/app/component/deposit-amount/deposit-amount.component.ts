import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../../account';
import { AccountService } from '../../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit-amount',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './deposit-amount.component.html',
  styleUrl: './deposit-amount.component.scss',
})
export class DepositAmountComponent {
  accounts: Account = new Account();
  id!: number;
  deposite = false;
  notValidAmount = false;

  constructor(
    private service: AccountService,
    private activeRoute: ActivatedRoute,
    private route : Router
  ) {}

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.service.getAccountById(this.id).subscribe((data) => {
      this.accounts = data;
    });
  }

  onSubmit(form: any) {
    if(this.inValidAmount(this.accounts.balance!)){
    this.service
      .depositeAmount(this.id!, this.accounts.balance!)
      .subscribe((data) => {
        this.accounts = data;
        this.deposite = true;
        // setTimeout(() => {
        //   this.route.navigate([`/home`]);
        // }, 3000);
        console.log("Deposite amount", this.accounts = data );
        
      });
    }else{
      this.notValidAmount = true;
      setTimeout(() => {
        this.notValidAmount = false;
      }, 3000);
    }
  }

  inValidAmount(amount : number):boolean{
return amount >0 && amount < 10000000
  }

  backRoute(){
    this.route.navigate([`/home`]);
  }

}

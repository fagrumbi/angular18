import { Component } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../account';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-withdraw-amount',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './withdraw-amount.component.html',
  styleUrl: './withdraw-amount.component.scss'
})
export class WithdrawAmountComponent {
  accounts: Account = new Account();
  id!: number;
  withdraw = false;
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
      .withdrawAmount(this.id!, this.accounts.balance!)
      .subscribe((data) => {
        this.accounts = data;
        this.withdraw = true;
        // setTimeout(() => {
        //   this.route.navigate([`/home`]);
        // }, 3000);
        console.log("withdraw amount", this.accounts = data );
        
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

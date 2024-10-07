import { Component } from '@angular/core';
import { Account } from '../../account';
import { AccountService } from '../../service/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-account-details',
  standalone: true,
  imports: [],
  templateUrl: './view-account-details.component.html',
  styleUrl: './view-account-details.component.scss'
})
export class ViewAccountDetailsComponent {

  accounts: Account = new Account();
  id!: number;
  constructor(private accountService: AccountService, private router:Router, private activeRoute: ActivatedRoute){}

  ngOnInit(){
    this.id=this.activeRoute.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe((data)=>{
      this.accounts=data;
      console.log("get account by id", data);
      
    })
   
  }
  backpage(){
    this.router.navigate([`/home`]);
    
  }

}


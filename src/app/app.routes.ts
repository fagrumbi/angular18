import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './component/account-list/account-list.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { DepositAmountComponent } from './component/deposit-amount/deposit-amount.component';
import { NgModule } from '@angular/core';
import { WithdrawAmountComponent } from './component/withdraw-amount/withdraw-amount.component';
import { ViewAccountDetailsComponent } from './component/view-account-details/view-account-details.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },  
  { path: 'home', component: HomePageComponent},
  { path: 'account', component: AccountListComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'deposite-amount/:id', component: DepositAmountComponent },
  { path: 'withdraw/:id', component: WithdrawAmountComponent },
  { path: 'view/:id', component: ViewAccountDetailsComponent }
]


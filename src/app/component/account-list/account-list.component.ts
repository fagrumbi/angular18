import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { Account } from '../../account';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'account-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss',
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  filteredUsers: any[] = [];
  paginatedUsers: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;
  searchTerm: string = '';

  totalResults: number = 0;

  constructor(private accountService: AccountService, private route: Router) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAllAccounts().subscribe((data) => {
      this.accounts = data;
      this.filteredUsers = [...this.accounts];
      this.updatePagination();
    });
  }

  deposite(id: number) {
    this.route.navigate([`/deposite-amount`, id]);
  }

  withdraw(id: number) {
    this.route.navigate([`/withdraw`, id]);
  }

  deleteAcount(id: number) {
    this.accountService.deleteAccount(id).subscribe((data) => {
      console.log('Account deleted', data);
      // setTimeout(() => {
      //   this.route.navigate([`/home`]);
      // }, 1000);
      this.getAccounts();
    });
  }

  viewAllAccount(id: number) {
   this.route.navigate([`/view`,id]);
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  onSearch(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.searchTerm = input.trim().toLowerCase();
    this.filterUsers();
  }

  filterUsers() {
    this.filteredUsers = this.accounts.filter(
      (user) =>
        user.accountholdername?.toLowerCase().includes(this.searchTerm) ||
        user.createBy?.toLowerCase().includes(this.searchTerm)
    );
    this.currentPage = 1; // Reset to first page after filtering
    this.updatePagination();
  }
}

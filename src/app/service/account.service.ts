import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../account';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'http://localhost:8090/api/accounts/';
  // private allAcountUrl = 'http://localhost:8090/api/accounts/all/account';
  // private createUrl = 'http://localhost:8090/api/accounts/add/account';
  // private getByIdUrl = 'http://localhost:8090/api/accounts/add/account';

  constructor(private httpClient: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.baseUrl}all/account`).pipe(
      tap((data) => console.log('Received data:', data)),
      catchError((error) => {
        console.error('Error occurred:', error);
        throw error;
      })
    );
  }

  createAccount(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(`${this.baseUrl}add/account`, account);
  }

  getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.baseUrl}account/${id}`);
  }

  depositeAmount(id: number, amount: number): Observable<Account> {
    const requestAmount = { amount };
    return this.httpClient.put<Account>(
      `${this.baseUrl}${id}/deposit`,
      requestAmount
    );
  }
  withdrawAmount(id: number, amount: number): Observable<Account> {
    const reqRemoAmount = { amount };
    return this.httpClient.put<Account>(
      `${this.baseUrl}${id}/withdraw`,
      reqRemoAmount
    );
  }

  deleteAccount(id : number) : Observable<Account>{
    return this.httpClient.delete<Account>(`${this.baseUrl}delete/${id}` );
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>('http://127.0.0.1:3000/customers').pipe(
        tap(_ => console.log('fetched customers')),
        catchError(this.handleError('get Customer', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Customer} from './customer';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) { }

  getCustomer(id: number): Observable<Customer> {
    return this.httpClient
      .get<Customer>(`http://127.0.0.1:3000/customers/${id}`).pipe(
        tap(_ => {
          console.log(`fetched customer with id ${id}`);
        }),
        catchError(this.handleError('get Customer', new Customer()))
      );
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient
      .get<Customer[]>('http://127.0.0.1:3000/customers').pipe(
        tap(_ => {
          console.log('fetched customers');
        }),
        catchError(this.handleError('get Customer', []))
      );
  }

  addCustomer(customer: Customer): Observable<Customer> {

    return this.httpClient
      .post<Customer>('http://127.0.0.1:3000/customers', customer, {}).pipe(
        tap(_ => console.log('added customer')),
        catchError(this.handleError('add Customer', new Customer()))
      );
  }

  updateCustomer(id, customer) {
    const editedCustomer = {id, ...customer};
    return this.httpClient
      .put<Customer>(`http://127.0.0.1:3000/customers/${id}`, editedCustomer, {}).pipe(
        tap(_ => console.log('updated customer')),
        catchError(this.handleError('Update Customer', new Customer()))
      );
  }

  deleteCustomer(id: number) {
    return this.httpClient
      .delete<Customer>(`http://127.0.0.1:3000/customers/${id}`, {}).pipe(
        tap(_ => console.log(`deleted customer with id ${id}`)),
        catchError(this.handleError('Delete Customer', new Customer()))
      );
  }

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}

## httpClient-Demo
### Setup
This repo consists of two separate "apps", a customer-api backend and the httpClient-demo front end, written in Angular 7. To get started, fork and clone this repo!

#### Back end
In order to use this as intended, you must have `json-server` installed globally. To install, run
`npm i -g json-server` from your command line.
Once installed, from the customer-api directory, start your server by running `json-server --watch database.json`.
Your server should now be started and accessible at `http://127.0.0.1:3000` and you should have access to the following routes:

- `GET /customers` for getting the customers,
- `GET /customers/<id>` for getting a single customer by id,
- `POST /customers` for creating a new customer,
- `PUT /customers/<id>` for updating a customer by id,
- `PATCH /customers/<id>` for partially updating a customer by id,
- `DELETE /customers/<id>` for deleting a customer by id.

You can use `_page` and `_limit` query parameters to get paginated data. In the Link header you'll get first, prev, next and last links.

For example:

`GET /customers?_page=1` for getting the first page of data, `GET /customers?_page=1&_limit=5` for getting the first five customers of the first page of data.

#### Front end
Navigate to the httpClient-demo directory and run `npm install`. Once dependencies have been installed, run `ng serve -o` and the web app should automatically open up for you at localhost:4200

This demo is intended to focus on demonstrating making rest API calls using Angular's built in `HttpClientModule`.

### Exercise
Once familiarized with Angular's httpClient, you have 3 primary goals to complete:

1. Implement the `getCustomer(id)` method to make an api call to your server to retrieve a single customer, and return an Observable of that customer. You'll need to update the `CustomerDetailComponent` accordingly to be able to utilize the customer in the Observable that is returned by your service.

2. Implement a method in your customerService that will UPDATE an existing customer in your database. The method should accept two parameters as input: an id of an existing customer in your database, and a customer object with updated values, and should make an http request to update the db. You should also modify the `CustomerUpdateComponent` with a form that will utilize this service.

3. Implement a method in your customerService that will DELETE an existing customer from your database. The method should accept one parameter as input: an id of an existing customer in your database and should make an http request to delete that customer from the db. You should also modify the `CustomerDetailComponent` to include a button to delete the customer, and redirect back to the customer list when complete.

3. 

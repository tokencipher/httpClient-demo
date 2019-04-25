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

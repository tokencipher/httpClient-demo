import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  addCustomerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addCustomerForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      city: [''],
      country: [''],
      title: ['']
    });
  }

  addCustomer() {
    if (this.addCustomerForm.valid) {
      console.log('add Customer successful.');
    } else {
      console.log('Fail.');
    }
  }

}

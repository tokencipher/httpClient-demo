import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  editCustomerForm: FormGroup;
  private id: number;
  constructor(private fb: FormBuilder, private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getCustomerInfo(this.id);
    this.editCustomerForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      city: [''],
      country: [''],
      title: ['']
    });
  }

  getCustomerInfo(lookupID: number) {
    this.customerService.getCustomer(lookupID).subscribe(({id, ...c}) => {
      this.editCustomerForm.setValue(c);
    });
  }

  editCustomer() {
    if (this.editCustomerForm.valid) {
      this.customerService
        .updateCustomer(this.id, this.editCustomerForm.value)
        .subscribe(_ => this.router.navigate([`/details/${this.id}`]));
    } else {
      console.log('Fail.');
    }
  }
}

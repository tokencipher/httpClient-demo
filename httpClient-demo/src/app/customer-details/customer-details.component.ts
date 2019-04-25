import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  id: number;
  customer: Customer;
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer() {
    this.route.params.subscribe(data => this.id = +(data.id));

    this.customerService.getCustomer(this.id).subscribe(c => this.customer = c);
  }

  removeCustomer() {

    this.customerService.deleteCustomer(this.id).subscribe( _ => this.router.navigate(['/list']));
  }

  verifyDelete(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(() => {
      this.removeCustomer();
    }, () => {
      console.log('modal dismissed');
    });
  }
}

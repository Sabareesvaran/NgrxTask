import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../state/customer.state';
import { Observable } from 'rxjs';
import { getCustState } from '../state/customer.selector';
import { SharedService } from '../shared/shared.service';
import { deleteCustomer } from '../state/customer.action';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]>;
  constructor(
    private store: Store<{ customers: Customer[] }>,
    private share: SharedService
  ) {}

  ngOnInit(): void {
    this.customers = this.store.select(getCustState);
  }

  editCustomer(Customer: Customer) {
    this.share.setCustomer(Customer);
  }
  deleteCustomer(DeleteCust: Customer) {
    const id = DeleteCust.id;
    if (confirm('Are you sure want to Delete?')) {
      this.store.dispatch(deleteCustomer({ id }));
    }
  }
}

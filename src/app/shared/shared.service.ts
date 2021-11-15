import { Injectable } from '@angular/core';
import { Customer } from '../state/customer.state';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  customer:Customer
  constructor() { }

  setCustomer(data:Customer){
    this.customer = data
  }
  getCustomer(){
    return this.customer
  }
}

import { Injectable } from '@angular/core';
import { Customer } from '../state/customer.state';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  customer:Customer
  authToken:boolean = false;
  constructor() { }

  setCustomer(data:Customer){
    this.customer = data
  }
  getCustomer(){
    return this.customer
  }
  getToken(){
    return this.authToken
  }
  setToken(token:boolean){
    this.authToken = token
  }

}

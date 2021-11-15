import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addCustomer } from '../state/customer.action';
import { Customer } from '../state/customer.state';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  CustomerForm:FormGroup
  customers:Observable<Customer[]>
  idvalue:string;


  constructor(private store:Store<{customers:Customer[]}>) { }

  ngOnInit(): void {
    this.CustomerForm = new FormGroup({
      Name:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      Phone:new FormControl(null,[Validators.required,Validators.minLength(10)]),
      Address:new FormControl(null,[Validators.required,Validators.minLength(10)]),
      Age:new FormControl(null,[Validators.required])
    })
  }

  onAddCustomer(){
    if(this.CustomerForm.valid){
      console.log(this.CustomerForm.value)

      const customer:Customer = {
        id:this.idvalue,
        Name:this.CustomerForm.value.Name,
        Phone:this.CustomerForm.value.Phone,
        Address:this.CustomerForm.value.Address,
        Age:this.CustomerForm.value.Age
      }
      this.store.dispatch(addCustomer({customer}))

    }

  }

}

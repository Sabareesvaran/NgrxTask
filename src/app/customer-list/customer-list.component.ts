import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer, CustomerState } from '../state/customer.state';
import {map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { getByid, getCustState } from '../state/customer.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addCustomer, modifyCustomer } from '../state/customer.action';
import { stringify } from 'querystring';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  addTag = false;
  onEdit = false;
  customers:Observable<Customer[]>
  idvalue:string;
  CustomerForm:FormGroup
  updateForm : FormGroup
  editId :string
  constructor(private store:Store<{customers:Customer[]}>) { }

  ngOnInit(): void {
   this.customers = this.store.select(getCustState)

   this.CustomerForm = new FormGroup({
    Name:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    Phone:new FormControl(null,[Validators.required,Validators.minLength(10)]),
    Address:new FormControl(null,[Validators.required,Validators.minLength(10)]),
    Age:new FormControl(null,[Validators.required])
  })
  this.updateForm = new FormGroup({
    Name:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    Phone:new FormControl(null,[Validators.required,Validators.minLength(10)]),
    Address:new FormControl(null,[Validators.required,Validators.minLength(10)]),
    Age:new FormControl(null,[Validators.required])
  })
  }

  editCustomer(Customer:Customer){

    this.onEdit = !this.onEdit
    console.log("this id:",Customer.id)
    this.editId = Customer.id;



  }
  deleteCustomer(Customer:Customer){

  }
  onAddCustomer(){
    if(this.CustomerForm.valid){
      console.log(this.CustomerForm.value)

      this.customers.subscribe(data=>{
        this.idvalue = (data.length + 1).toString()
      });

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
  changetag(){
    this.addTag = !this.addTag
  }

  onUpdateCustomer(){
    if(this.updateForm.valid){
      console.log(this.updateForm.value)
      const customer:Customer = {
        id:this.editId,
        Name:this.updateForm.value.Name,
        Phone:this.updateForm.value.Phone,
        Address:this.updateForm.value.Address,
        Age:this.updateForm.value.Age
      }
      this.store.dispatch(modifyCustomer({customer}))

    }
  }

}

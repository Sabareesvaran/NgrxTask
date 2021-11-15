import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SharedService } from '../shared/shared.service';
import { modifyCustomer } from '../state/customer.action';
import { Customer } from '../state/customer.state';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  updateForm : FormGroup
  editId :string

  cusdata:Customer

  constructor(private store:Store<{customers:Customer[]}>,private shared:SharedService) { }

  ngOnInit(): void {


    this.cusdata = this.shared.getCustomer()

    this.editId = this.cusdata.id

    this.updateForm = new FormGroup({
      Name:new FormControl(this.cusdata.Name,[Validators.required]),
      Phone:new FormControl(this.cusdata.Phone,[Validators.required]),
      Address:new FormControl(this.cusdata.Address,[Validators.required]),
      Age:new FormControl(this.cusdata.Age,[Validators.required])
    })

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
    }else{
      console.log("no valid");
    }
  }
}

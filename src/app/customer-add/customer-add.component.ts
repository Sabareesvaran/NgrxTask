import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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


  constructor(
    private store:Store<{customers:Customer[]}>,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.CustomerForm = new FormGroup({

      Name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      Phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      Address:new FormControl('',[Validators.required]),
      Age:new FormControl('',[Validators.required])
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
      alert("Customer Saved Successfully!")
      this.router.navigate(['/'],{relativeTo:this.route})
    }

  }

  get f() { return this.CustomerForm.controls; }


  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private store:Store<{customers:Customer[]}>,
    private shared:SharedService,
    private route: ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {


    this.cusdata = this.shared.getCustomer()

    this.editId = this.cusdata.id

    this.updateForm = new FormGroup({
      Name:new FormControl(this.cusdata.Name,[Validators.required,Validators.minLength(4)]),
      Phone:new FormControl(this.cusdata.Phone,[Validators.required,Validators.minLength(10)]),
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
      alert("Customer Updated Successfully!")
      this.router.navigate(['/'],{relativeTo:this.route})

    }else{
      console.log("no valid");
    }


  }

  get f() { return this.updateForm.controls; }

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

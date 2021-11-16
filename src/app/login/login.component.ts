import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SharedService } from '../shared/shared.service';
import { login } from './state/login.actions';
import { isAuthendicated } from './state/login.selector';
import { LoginState } from './state/login.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  isAuthendicated = false;
  userDetails:Subscription
  Email:string
  Password:string
  registerForm: FormGroup;
    submitted = false;

  constructor(
    private store:Store<{User:LoginState}>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private shared:SharedService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.userDetails = this.store.select(isAuthendicated).subscribe(data=>{
      this.isAuthendicated = data;
   })


   this.registerForm = this.formBuilder.group({

    email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.minLength(6)]]
});

  }

  onLogin(){

    this.Email = this.registerForm.value.email
    this.Password = this.registerForm.value.password

    this.registerForm.reset();

    this.store.dispatch(login({Email:this.Email,Password:this.Password}))
    if(!this.isAuthendicated){
      alert("Username or Password Incorrect")
    }
    else{
            this.shared.setToken(true)
            this.router.navigate(['/'],{relativeTo:this.route})
    }
  }

  ngOnDestroy(){
    this.userDetails.unsubscribe()
  }

  get f() { return this.registerForm.controls; }


}

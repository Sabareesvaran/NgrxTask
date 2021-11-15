import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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

  constructor(private store:Store<{User:LoginState}>) { }

  ngOnInit(): void {
    this.userDetails = this.store.select(isAuthendicated).subscribe(data=>{
      this.isAuthendicated = data;
   })
  }

  onLogin(){

    if(this.Email !=null && this.Password != null){
    this.store.dispatch(login({Email:this.Email,Password:this.Password}))
    }
  }

  ngOnDestroy(){
    this.userDetails.unsubscribe()
  }

}

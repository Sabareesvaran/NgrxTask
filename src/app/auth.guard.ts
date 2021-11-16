import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { isAuthendicated } from './login/state/login.selector';
import { LoginState } from './login/state/login.state';
import { SharedService } from './shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  isAuthendicated = true;
  userDetails:Subscription
  constructor(
    private store:Store<{User:LoginState}>,
    private route: ActivatedRoute,
    private router:Router,
    private shared:SharedService
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isAuthendicated = this.shared.getToken()
      if(this.isAuthendicated){
        return true
      }else{
       this.router.navigate(['login'],{relativeTo:this.route})
      return false;
      }
  }


}

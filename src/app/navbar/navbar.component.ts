import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../login/state/login.actions';
import { LoginState } from '../login/state/login.state';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private store:Store<{User:LoginState}>,
    private route: ActivatedRoute,
    private shared:SharedService,
    private router:Router,
    ) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.store.dispatch(logout())
    this.shared.setToken(false)
    this.router.navigate(['login'],{relativeTo:this.route})
  }

}

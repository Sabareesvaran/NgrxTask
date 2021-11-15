import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './appState/app.state';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerAddComponent,
    NavbarComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

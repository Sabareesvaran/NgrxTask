import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';



const routes:Routes =[
{path:"", canActivate:[AuthGuard], component:CustomerListComponent},
{path:"add",canActivate:[AuthGuard], component:CustomerAddComponent},
{path:"edit", canActivate:[AuthGuard], component:CustomerEditComponent},
{path:"login", component:LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { CustomerAddComponent } from '../customer-add/customer-add.component';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';



const routes:Routes =[
  {path:"",component:CustomerListComponent},
{path:"add", component:CustomerAddComponent},
{path:"edit", component:CustomerEditComponent},


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

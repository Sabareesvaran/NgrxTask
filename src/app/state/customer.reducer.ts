import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { addCustomer, modifyCustomer } from "./customer.action";
import { InitialState } from "./customer.state";

const _customerReducer = createReducer(InitialState,on(addCustomer,(state, action)=>{
  console.log("This Add Customer:",action.customer);
  const add = {...action.customer}
  add.id = (state.customers.length + 1).toString()
  return{
    ...state,
    customers:[...state.customers,add]
  }
}),on(modifyCustomer,(state,action)=>{
  console.log("ModifyCustomer",action);

  return{
    ...state,
  }
}))

export function customerReducer (state,action){
  return _customerReducer(state,action)
}

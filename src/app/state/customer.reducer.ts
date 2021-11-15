import { createReducer, on, props } from "@ngrx/store";
import { addCustomer, deleteCustomer, modifyCustomer } from "./customer.action";
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

  const updatedCustomer = state.customers.map(cust =>{
    return action.customer.id === cust.id ? action.customer : cust
  })

  return{
    ...state,
    customers:updatedCustomer
  }
}),on(deleteCustomer,(state,action)=>{

  const updatedState = state.customers.filter(cust=>{
    return cust.id != action.id
  })
  return{
    ...state,
    customers:updatedState
  }
}))

export function customerReducer (state,action){
  return _customerReducer(state,action)
}

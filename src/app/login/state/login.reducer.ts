import { createReducer, on } from "@ngrx/store"
import { login } from "./login.actions"
import { InitialState } from "./login.state"



const _loginReducer = createReducer(InitialState,on(login,(state,action)=>{

  let bool : boolean
      if((state.Email === action.Email) && (state.Password === action.Password)){
        bool = true
      }else{
        bool = false
      }
  return{
    ...state,
      isAuthendicated : bool
  }
}))



export function loginReducer (state,action){
  return _loginReducer(state,action)
}

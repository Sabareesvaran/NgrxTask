
import { loginReducer } from "../login/state/login.reducer";
import { customerReducer } from "../state/customer.reducer";
import { CustomerState } from "../state/customer.state";

export interface AppState{
  customer:CustomerState
}

export const appReducer = {
 customers:customerReducer,
 login:loginReducer

}

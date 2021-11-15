
import { customerReducer } from "../state/customer.reducer";
import { CustomerState } from "../state/customer.state";

export interface AppState{
  customer:CustomerState
}

export const appReducer = {
 customers:customerReducer
}

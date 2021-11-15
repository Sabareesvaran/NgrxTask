import { createAction, props } from "@ngrx/store";
import { Customer } from "./customer.state";

export const addCustomer = createAction('addCustomer',props<{customer:Customer}>())
export const deleteCustomer = createAction('deleteCustomer')
export const modifyCustomer = createAction('modifyCustomer',props<{customer:Customer}>())

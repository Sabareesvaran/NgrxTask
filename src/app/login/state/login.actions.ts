import { createAction, props } from "@ngrx/store";

export const login = createAction('login', props<{Email:string,Password:string}>())

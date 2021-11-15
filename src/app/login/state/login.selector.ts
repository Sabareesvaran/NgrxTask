import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from "./login.state";

const isAuth = createFeatureSelector<LoginState>('login');

export const isAuthendicated = createSelector(isAuth,(state)=>{
  return state.isAuthendicated
});

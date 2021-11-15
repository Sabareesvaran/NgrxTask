export interface LoginState{
  Email:string,
  Password:string,
  isAuthendicated:boolean
}



export const InitialState: LoginState = {
  Email:"sabareesvaran@yavar.in",
  Password:"codingtown",
  isAuthendicated:false
}


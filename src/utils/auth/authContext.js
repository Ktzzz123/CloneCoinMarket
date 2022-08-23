import { createContext } from "react";

const authContext = createContext({
  authenticated: false,
  setAuthenticated: (auth) => {},
  token:'',
  setToken: (token)=>{},
  user: {},
  setUser: (user)=>{}
});

export default authContext;
import { createContext, useState } from "react";
import { jsxs } from "react/jsx-runtime";




export const MyAuth=createContext();

export const AuthProvider =({children})=>{
    const [registerUsers, setRegisterUsers] = useState(  
        JSON.parse(localStorage.getItem("registeruser")) || []);
    const [loginUSer, setLoginUSer] = useState(null);
    

    return <MyAuth.Provider value={{loginUSer, setLoginUSer ,registerUsers, setRegisterUsers}}>{children}</MyAuth.Provider>
}
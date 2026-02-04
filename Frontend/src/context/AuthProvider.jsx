import React,{createContext} from "react"
import { useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({children}){
        const initialAuthUser = localStorage.getItem("Users");
        const[authUser, setAuthUser] = useState(() => {
            if (initialAuthUser) {
                try {
                    return JSON.parse(initialAuthUser);
                } catch (error) {
                    console.error("Error parsing user data from localStorage:", error);
                    localStorage.removeItem("Users");
                    return undefined;
                }
            }
            return undefined;
        })
    
        return(
            <AuthContext.Provider value={[authUser,setAuthUser]}>
                {children}
            </AuthContext.Provider>
        )
}

export const useAuth =()=> useContext(AuthContext);
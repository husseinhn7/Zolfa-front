import React , {useState  ,createContext} from "react";


const AuthContext = createContext("")

export default AuthContext

export const AuthProvider = ({ children}) => {
    const setUser = (newUser) => {
         setValue(oldv =>{return  {...oldv , ...newUser}})
    }

    
    const [Value , setValue] = useState({User : null , setUser})
    
    return (
        <AuthContext.Provider value={Value}>
            {children}
        </AuthContext.Provider>
    )

}
import React , {useState ,useEffect  ,createContext} from "react";
import { getLocalItem } from "../utility/local";
import jwtDecode from "jwt-decode";


const AuthContext = createContext("")

export default AuthContext

export const AuthProvider = ({ children}) => {
    
    useEffect(()=>{ 
        const token = getLocalItem('token')
        console.log(token)
        console.log(token!==null)
        // console.log(token)
        if (!!token) {
            const accessToken = jwtDecode(token.access)
            console.log('hi form if token is ' , va )
            setUser(true , accessToken.is_staff)
        }
        else {
            console.log('hi form els')
        }


    }
    ,[])
    const setUser = (authentication , staff ) => {
         setValue(prev =>{
            return  {
                isAuthenticated : authentication ,
                isStaff : staff,
                 ...prev , 
                
            }
        
        })
    }

    
    const [Value , setValue] = useState({isAuthenticated : false , isStaff : false , setUser})
    return (
        <AuthContext.Provider value={Value}>
            {children}
        </AuthContext.Provider>
    )

}



import React , {useState  ,createContext} from "react";


const ThemeContext = createContext("")

export default ThemeContext

export const ThemeProvider = ({ children}) => {
    const setTheme = () => {
         setValue(oldTheme =>{return  {...oldTheme , lightTheme : oldTheme.lightTheme ? false : true }})
    }

    
    const [Value , setValue] = useState({lightTheme : true , setTheme})
    
    return (
        <ThemeContext.Provider value={Value}>
            {children}
        </ThemeContext.Provider>
    )

}
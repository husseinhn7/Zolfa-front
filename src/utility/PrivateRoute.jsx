import {Outlet , Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import { useContext } from 'react'


const PrivetRoute = () =>{

    const {isAuthenticated } = useContext(AuthContext)

   return (
    
    
    isAuthenticated ? <Outlet/> : <Navigate to='/log' />
   )
   
}


export default PrivetRoute;
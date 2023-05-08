import {Outlet , Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import { useContext } from 'react'
import LogIn from '../components/LogIn'


const PrivetRoute = () =>{

    const {isAuthenticated } = useContext(AuthContext)

    console.log('this is from privet rout ' , isAuthenticated)
   return (
    
    
    isAuthenticated ? <Outlet/> : <Navigate to='/log' />
   )
   
}


export default PrivetRoute;
import {Outlet , Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import { useContext } from 'react'




import React from 'react'

const AuthenticatedRoute = () => {
    const {isAuthenticated } = useContext(AuthContext)

    return (
     isAuthenticated ? <Outlet/> : <Navigate to='/log' />
    )
}

export default AuthenticatedRoute

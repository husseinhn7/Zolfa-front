import {Outlet} from 'react-router-dom'


const PrivetRoute = () =>{
    const auth = false
   return (
    auth ? <Outlet/> : <input/>
   )
   
}


export default PrivetRoute;
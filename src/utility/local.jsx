import jwtDecode from 'jwt-decode';




export const setLocalItem = (key , value)=>{
    localStorage.setItem(key , JSON.stringify( value))
}

export const getLocalItem = (key) =>{
    return JSON.parse(localStorage.getItem(key))

}
  

export const getUserId = () =>{
    return jwtDecode(getLocalItem('token').access).user_id
}
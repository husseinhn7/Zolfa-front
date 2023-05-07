export const setLocalItem = (key , value)=>{
    localStorage.setItem(key , JSON.stringify( value))
}

export const getLocalItem = (key) =>{
    return JSON.parse(localStorage.getItem(key))
}
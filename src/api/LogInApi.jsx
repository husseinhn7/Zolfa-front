import Api from "./Base";

const Login = (data) => {
    return Api.post('http://192.168.1.8:8000/api/token/' , data)
    
}





export default Login ; 
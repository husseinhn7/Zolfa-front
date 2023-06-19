import Api from "./Base";

const Login = (data) => {
    return Api.post('api/token/' , data)
    
}





export default Login ; 
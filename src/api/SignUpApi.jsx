import Api from "./Base";



const SignUpApi = (data) => {
    return Api.post('http://192.168.1.8:8000/users/signup/' , data )
    

}


export default SignUpApi;
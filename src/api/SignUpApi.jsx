import Api from "./Base";



const SignUpApi = (data) => {
    return Api.post('users/signup/' , data )
    

}


export default SignUpApi;
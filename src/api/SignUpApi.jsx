import Api from "./Base";



const SignUp = (data) => {
    Api.post('http://127.0.0.1:8000/users/signup/' , data )
    .then(res=>{
        if ( res.status === 201 ) {
            console.log(res.data);
        }
        
    })


}


export default SignUp;
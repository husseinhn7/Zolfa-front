import Api from "./Base";



const SaveExam = (data) => {
    Api.post('http://192.168.1.8:8000/exams/create-exam/' , data )
    .then(res=>{
        if ( res.status === 201 ) {
            console.log(res.data);
        }
        else {
            console.log(res);

        }
        
    })
}
export default SaveExam;
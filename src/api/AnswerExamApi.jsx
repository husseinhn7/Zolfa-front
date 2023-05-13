import Api from "./Base"






const AnswerExamApi = (data) => {
    const questions = Object.keys(data)
    questions.forEach((question)=>{
        const Answer = {student : 1 , question : question , answer : data[question]}
        Api.post('http://192.168.1.8:8000/exams/answer-exam/' , Answer)
        .then(response=>{
            if (response.status === 201) {
                console.log(response.data)
            }
            else {
                console.log(response)
            }
        })
    })
    
  
}

export default AnswerExamApi

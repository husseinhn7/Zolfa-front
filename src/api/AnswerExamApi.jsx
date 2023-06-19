import Api from "./Base"
import { getUserId } from "../utility/local"






const AnswerExamApi = (data , examId , markId) => {
    const questions = Object.keys(data)
    questions.forEach((question)=>{
        const Answer = {student : getUserId(), exam : examId, question : question , answer : data[question]}
        console.log(examId)
        Api.post(`exams/answer-exam/${markId}` , Answer)
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

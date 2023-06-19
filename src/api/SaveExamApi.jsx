import Api from "./Base";
import SaveQuestionApi from "./SaveQuestionApi";
import SendExamLink from "./SendExamLink";
import { getUserId } from "../utility/local";



const SaveExam = (data , questions , options) => {
    Api.post('exams/create-exam/' , {exam_creator : getUserId() , ...data} )
    .then(res=>{
        if ( res.status === 201 ) {
            const examPk = res.data.pk
            console.log(questions , options)
            SendExamLink(examPk)
            questions.map(question=>{
                const questionData = {exam : examPk , question : question.question , mark : 9}
                const optionsData = options.filter( option=>{
                    return option.questionId === question.id
                }

                )
                SaveQuestionApi(questionData , optionsData)
            })
            
        }
        else {
            console.log(res);
           

        }

        
    })
}
export default SaveExam;
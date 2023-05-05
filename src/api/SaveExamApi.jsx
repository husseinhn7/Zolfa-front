import Api from "./Base";
import SaveQuestionApi from "./SaveQuestionApi";




const SaveExam = (data , questions , options) => {
    Api.post('http://192.168.1.8:8000/exams/create-exam/' , data )
    .then(res=>{
        if ( res.status === 201 ) {
            const examPk = res.data.pk
            console.log(questions , options)

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
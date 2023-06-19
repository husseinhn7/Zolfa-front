import Api from "./Base"





const StartExamApi = (studentPk,examPk) => {
    return Api.get(`exams/start-exam/${examPk}/${studentPk}`  )
    
 
}      

export default StartExamApi

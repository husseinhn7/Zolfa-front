import Api from './Base'

const RetrieveQuestions = (id) => {
    return Api.get(`exams/retrieve-questions/${id}`)
    
  
}

export default RetrieveQuestions

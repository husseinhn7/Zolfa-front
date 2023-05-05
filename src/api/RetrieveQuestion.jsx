import Api from './Base'

const RetrieveQuestions = (id) => {
    return Api.get(`http://192.168.1.8:8000/exams/retrieve-questions/${id}`)
    
  
}

export default RetrieveQuestions

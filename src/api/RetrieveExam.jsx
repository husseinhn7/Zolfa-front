import Api from './Base'

const RetrieveExam = (id) => {
    return Api.get(`exams/retrieve-exam/${id}`)
    
  
}

export default RetrieveExam

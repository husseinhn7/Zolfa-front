import Api from './Base'

const RetrieveExam = (id) => {
    return Api.get(`http://192.168.1.8:8000/exams/retrieve-exam/${id}`)
    
  
}

export default RetrieveExam

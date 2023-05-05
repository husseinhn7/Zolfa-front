import Api from './Base'

const RetrieveOption = (id) => {
   return  Api.get(`http://192.168.1.8:8000/exams/retrieve-options/${id}`)
    
  
}

export default RetrieveOption

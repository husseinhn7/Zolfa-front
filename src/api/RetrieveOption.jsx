import Api from './Base'

const RetrieveOption = (id) => {
   return  Api.get(`exams/retrieve-options/${id}`)
    
  
}

export default RetrieveOption

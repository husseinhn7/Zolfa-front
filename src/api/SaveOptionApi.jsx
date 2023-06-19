import Api from './Base'
const SaveOptionApi = (data ) => {
  Api.post('exams/create-option/' , data)
  .then(res=>{
    if (res.status === 201 ) {
      console.log(res.data)
     
    }
  }

  )
  
  
}

export default SaveOptionApi

import Api from './Base'
const SaveOptionApi = (data ) => {
  Api.post('http://192.168.1.8:8000/exams/create-option/' , data)
  .then(res=>{
    if (res.status === 201 ) {
      console.log(res.data)
     
    }
  }

  )
  
  
}

export default SaveOptionApi

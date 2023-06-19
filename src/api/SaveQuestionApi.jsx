import Api from './Base'
import SaveOptionApi from './SaveOptionApi'


const SaveQuestionApi = (data , options) => {
    Api.post('exams/create-question/' , data)
    .then(res=>{
      if (res.status === 201){
        console.log(res.data)
        const questionPk = res.data.pk
        options.map(option=>{
          const optionData = {question : questionPk ,
              option : option.option ,
              correct_option : option.correct_option , 
              final_mark : 9}
          SaveOptionApi(optionData)

        })
      }

      else {
        console.log(res)
      }
    }
    )
}

export default SaveQuestionApi

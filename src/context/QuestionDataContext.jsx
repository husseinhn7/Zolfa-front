import React , {useState  ,createContext} from "react";

const QuestionContext = createContext("")

export default QuestionContext

export const QuestionProvider = ({children}) =>{
    
    const addQuestion = () =>{
        setQuestionData((oldData)=>{
            return {
                    Question   : [...oldData.Question ,
                         {id : oldData.Question[oldData.Question.length-1].id + 1 , question : '' , mark : '' , error : false}] ,
                    functions  : oldData.functions 
            }
        
        })

    }

    const deleteQuestion = (id , length)=>{
        if (length ===1){
            console.log("most have at least on Question ");

        }

        else 
        {
        setQuestionData((oldData)=>{
            const newData = oldData.Question.filter((obj)=>{
                return obj.id !== id 
            })
            return {
                Question  : newData ,
                functions : oldData.functions 
            }
        })
        }

    }

    

    const changeQuestion = (id , value ) =>{
        setQuestionData((oldData)=>{
            var list = oldData.Question
            const index = list.findIndex((obj)=>obj.id === id)
            list[index].question = value
            list[index].error = false
            return {
                Question : list , 
                functions : oldData.functions
            }

        })
         
        }


    const setError = (id , value)=>{
        setQuestionData((oldData)=>{
            var list = oldData.Question
            const index = list.findIndex((obj)=>obj.id === id)
            list[index].error = value
            return {
                Question : list , 
                functions : oldData.functions
            }

        })

    }

    const [QuestionData ,setQuestionData] = useState({
        Question : [
        {id : 1 , question : '' , mark : '' , error : false }
         ], 
         
         functions : { deleteQuestion , addQuestion , changeQuestion , setError }
        }) 


    return <QuestionContext.Provider value={QuestionData}>

            {children}
    
            </QuestionContext.Provider>
}

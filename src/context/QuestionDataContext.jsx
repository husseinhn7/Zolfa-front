import React , {useState  ,createContext} from "react";

const QuestionContext = createContext("")

export default QuestionContext

export const QuestionProvider = ({children}) =>{
    
    const addQuestion = () =>{
        setQuestionData((oldData)=>{
            console.log(oldData.Question.length-1);
            return {
                    Question   : [...oldData.Question ,
                         {id : oldData.Question[oldData.Question.length-1].id + 1 , question : '' , mark : '' }] ,
                    functions  : oldData.functions 
            }
        
        })

    }

    const deleteQuestion = (id , length)=>{
        console.log(id , length);
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
            return {
                Question : list , 
                functions : oldData.functions
            }

        })
         
       

        console.log(id , value )
        
        
        }

    const [QuestionData ,setQuestionData] = useState({
        Question : [
        {id : 1 , question : '' , mark : '' , options : [{ id : 1 , option : '' , correct_option : false}] }
         ], 
         
         functions : { deleteQuestion , addQuestion , changeQuestion }
        }) 


    return <QuestionContext.Provider value={QuestionData}>

            {children}
    
            </QuestionContext.Provider>
}

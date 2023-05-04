import React , {useState  ,createContext} from "react";

const OptionsContext = createContext("")

export default OptionsContext

export const OptionsProvider = ({children}) =>{
    
    const addOption = (questionI ) =>{
            
        setOptionsData((oldData)=>{
            var newId = 0 
            if (oldData.options.length === 0 ) {
                 newId += 0
            }

            else {
                 newId += oldData.options[oldData.options.length-1].id + 1
            }
            return {
                options : [...oldData.options , {questionId : questionI , id : newId , option : '' , correct_option : false }] ,
                tools   : oldData.tools

            }
        
        })
        


    }

    const deleteOption = (id , choice)=>{

        setOptionsData((oldData)=>{
            const newData = oldData.options.filter((obj)=>{
                if (choice === 'o') {
                    return obj.id !== id 
                } else {
                    return obj.questionId !== id
                }
                 
            })
            return {
                options  : newData ,
                tools : oldData.tools
            }
        })
    }

    
    const changeOption = (id , questionId , value) =>{
        setOptionsData((oldData)=>{
            var list = oldData.options
            const index = list.findIndex((obj)=>obj.id === id && obj.questionId === questionId)
            list[index].option = value
            return {
                options : list , 
                tools : oldData.tools
            }

        })

    }

    const CorrectOption = (id , questionId , value) =>{
        setOptionsData((oldData)=>{
            var list = oldData.options
            const list_2 = list.filter((obj)=> obj.questionId === questionId)
            list_2.forEach((obj) =>{obj.correct_option = false})
            const index = list.findIndex((obj)=>obj.id === id && obj.questionId === questionId)
            list[index].correct_option = value
            return {
                options : list , 
                tools : oldData.tools
            }

        })

    }



    const [OptionsData ,setOptionsData] = useState({
         options : [{ questionId : 1 ,  id : 1 , option : '' , correct_option : false}] , 
         
         tools : { deleteOption , addOption , changeOption , CorrectOption}
        }) 


    return <OptionsContext.Provider value={OptionsData}>

            {children}
    
            </OptionsContext.Provider>
}

import React from 'react'
import { Card , Icon, Button , 
    Radio ,Divider , Chip , IconButton  , 
    CardContent , Grid , TextField , 
    InputAdornment, Stack} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext ,memo , useMemo } from 'react'
import QuestionContext from '../context/QuestionDataContext'
import OptionsContext from '../context/OptionsDataContext'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CustomContainer from './CustomContainer';
import Demo from './Demo';
import CreateOption from './CreateOption'; 
import AddButton from './AddButton';
const CreateQuestion = () => {
    const {Question , functions } = useContext(QuestionContext)
    const {options , tools } = useContext(OptionsContext)
    const handelDeleteQuestion = (id) =>{
      if (Question.length === 1){
        window.alert('يجب ان يحتوي الاختبار علي سؤال واحد علي الأقل')
      }
      else {
        functions.deleteQuestion(id , Question.length)
      }
    }

  return (
    <CustomContainer  sx={{paddingBottom : "50px" ,bgcolor:'#eee'}}  >
            {Question.map((element , index )=>{
            return   <Card key={index} sx={{marginTop:"20px" , paddingBottom : "30px"}}>
                    <CardContent>
                        <Grid container spacing={2} justifyContent="center" alignItems="center"   dir='rtl' >
                            
                            <Demo 
                            id = {element.id}
                            error = {element.error}
                            question = {element.question}
                            changeQuestion = {functions.changeQuestion}
                            handelDeleteQuestion = {handelDeleteQuestion}
                            
                            
                            />

                            {options.map((op , i )=>{
                                if (op.questionId === element.id) {
                                    return <CreateOption
                                            key={i}
                                            id ={op.id}
                                            error ={op.error}
                                            option ={op.option}
                                            questionId  = {element.id}
                                            isCorrectOption = {op.correct_option}
                                            CorrectOption ={tools.CorrectOption}
                                            deleteOption ={tools.deleteOption}
                                            changeOption={tools.changeOption}/>
                                               
                        }})}

                         <AddButton 
                         id = {element.id}
                         addOption = {tools.addOption}
                         
                         
                         
                         />
                        </Grid>
                    </CardContent>              
                </Card>

            })}
    </CustomContainer>
  )
}

export default memo(CreateQuestion)

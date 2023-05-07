import React from 'react'
import { Card , Icon, Button , 
    Radio ,Divider , Chip , IconButton  , 
    CardContent , Grid , TextField , 
    InputAdornment, Stack} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react'
import QuestionContext from '../context/QuestionDataContext'
import OptionsContext from '../context/OptionsDataContext'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CustomContainer from './CustomContainer';

const CreateQuestion = () => {
    const {Question , functions } = useContext(QuestionContext)
    const {options , tools } = useContext(OptionsContext)
    const handelDeleteQuestion = (id) =>{
      if (Question.length === 1){
        return <Alert />
      }
      functions.deleteQuestion(id , Question.length)
      tools.deleteOption(id , 'q')

    }
  return (
    <CustomContainer  sx={{paddingBottom : "50px" ,bgcolor:'#eee'}}  >
            {Question.map((element , index )=>{
            return   <Card key={index} sx={{marginTop:"20px" , paddingBottom : "30px"}}>
                    <CardContent>
                        <Grid container spacing={2} justifyContent="center" alignItems="center"   dir='rtl' >
                            <Grid item xs={12} >
                                <TextField 
                                    fullWidth
                                    placeholder='راس السؤال'
                                    name='question'
                                    value={element.question} 
                                    onChange={(e)=>{functions.changeQuestion(element.id , e.target.value)}}

                                /> 
                                
                                </Grid>
                                <Grid item xs={12} justifyContent="center" alignItems="center" >
                                    <Divider>
                                        <Chip label="الاختيارات" />
                                    </Divider>
                                </Grid>

                            {options.map((op , i )=>{
                                if (op.questionId === element.id) {
                                    return <Grid key={i} item xs={12}>
                                                <TextField
                                                    multiline
                                                    fullWidth  
                                                    size='small' 
                                                    id="fullWidth"
                                                    name = 'option'
                                                    value = {op.option} 
                                                    onChange = { e=>{tools.changeOption(op.id , element.id,e.target.value)}}
                                                    InputProps={{
                                                    style : {paddingLeft : 0 , 
                                                            paddingRight : 0 } , 
                                                    endAdornment:   <InputAdornment position="end"> 
                                                                      <Radio  
                                                                        value={true}
                                                                        checked= {op.correct_option === true }
                                                                        name = {`${element.id}`} 
                                                                        onChange={(e)=>{tools.CorrectOption(op.id , element.id,e.target.checked)}}
                                                                      />
                                                                    </InputAdornment>,

                                                    startAdornment: <InputAdornment position="start">
                                                                        <IconButton aria-label="delete" 
                                                                            onClick={()=>{tools.deleteOption(op.id , 'o')}}
                                                                        >
                                                                    <DeleteIcon />
                                                    </IconButton></InputAdornment>
                                                    }}    
                                                />  
                                            </Grid>

                        }})}

                        <Grid item xs={2} alignContent='center' justifyContent="center" alignItems="center">
                            <Stack justifyContent="center" alignItems="center">
                                <IconButton xs={{ width : '100%'}}  variant='outlined' size='small' onClick={()=>{tools.addOption(element.id)}} ><Icon> <AddCircleOutlineIcon/> </Icon> </IconButton>
                            </Stack>
                        </Grid>
                        </Grid>
                    </CardContent>              
                </Card>

            })}
    </CustomContainer>
  )
}

export default CreateQuestion

import React , {useState , useEffect , useRef} from 'react'
import { Grid ,Chip,Button,Alert ,Card ,Divider, CardContent , Typography } from '@mui/material'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RetrieveExam from '../api/RetrieveExam';
import RetrieveQuestions from '../api/RetrieveQuestion';
import AnswerExamApi from '../api/AnswerExamApi';





const ViewExam = (props) => {
  const [error , setError ] = useState({})
  const [examData , setExamData ] = useState([])
  const [questionData , setQuestionData ] = useState([])
  const [answers , setAnswers] = useState({})
  
  useEffect(()=>{
      const fetchData = async () =>{
       
      setExamData(props.data)
      const res2 = await RetrieveQuestions(props.examId)
      const data2 = res2.data 
      setQuestionData(data2)
      console.log(questionData)
    }

    fetchData()
     
  }
    
    
    
    ,[])
  

  const handelSubmitAnswers =  ()=>{
    var AllQuestionHaveAnswers = true
    var listOfQuestions = questionData.map((obj)=>{
      const key = obj.question.pk
      setError((prev)=> { 
        return {
        ...prev ,
        [key] : false 
      }})
      return obj.question.pk
      })
    var listOfAnswers = Object.keys(answers).map((key)=>{return parseInt(key)})
    console.log(listOfAnswers , listOfQuestions)
      listOfQuestions.forEach((question)=>{
        if (!listOfAnswers.includes(question)){
          setError((prev)=>{
           return { ...prev ,
            [question] : true}
          })
          AllQuestionHaveAnswers = false
        }
      })
      if( AllQuestionHaveAnswers){
        AnswerExamApi(answers)
      }
      
  }

  const handleChange = (event , questionId) => {
    setError((prev)=>{
      return { ...prev ,
       [questionId] : false}
     })

   
    setAnswers((prev)=>{
      return {
        ...prev , 
        [questionId] :  parseInt(event.target.value)
      }
    })

  }
  return (
    <Grid container spacing={6} justifyContent="center" alignItems="center"   sx={{mt:"1%" , background:'#eee' }} >
        <Grid item xs={11} sm={8} md={6} xl={4} >
            <Card sx={{marginY:"5%" , p:2}}>
            <Grid container spacing={2} justifyContent="center" alignItems="center"   dir='rtl' >
              
                <CardContent>
                  <Grid item xs={12} >
                    
                      <Typography variant='h5'>{examData.title} </Typography>                  
                  </Grid>
                  
                 
                </CardContent>
               </Grid>
            </Card>

          
            {questionData.map((q,i)=>{




           
            return <Card key= {i} sx={{shadows: 4 ,marginY:"5%" }} >

                <CardContent>
                <Grid container spacing={2} justifyContent="center" alignItems="center"   dir='rtl' >

                  {
                    error[q.question.pk] ? <Grid item xs={12} >
                    
                    <Alert severity="error" >لم تتم الاجابة علي هذا السؤال ! </Alert>             
                  </Grid> : null

                  }


                  <Grid item xs={12} >
                    
                      <Typography variant='h6'>{q.question.pk } </Typography>                  
                  </Grid>

                  

                  <Grid item xs={12} justifyContent="center" alignItems="center" >
                    <Divider>
                        <Chip label="الاختيارات" />
                    </Divider>
                    
                  </Grid>
                 

                  
                  
                  {q.option.map((choice , index) => (

                    <Grid item xs={12} key={index} >
                    <FormControlLabel 
                    sx={{width:'100%' }}   
                    checked={answers[`${q.question.pk}`] === choice.pk}
                    onChange={(e)=>handleChange(e,q.question.pk)}
                    control={<Radio sx={{alignSelf:'flex-start' }}/>} value={choice.pk}
                    label={choice.pk}
                    
                    > </FormControlLabel>
                   </Grid>
                   
                   ))}
                 
                  
                  
                  
                 



                  </Grid>
                </CardContent>
                
            </Card>  })}
                      <Button  onClick={()=>console.log(answers)}   >fffff</Button>
                      <Button  onClick={()=>console.log(questionData)}   >fffff</Button>
                      <Button variant='outlined'  onClick={()=>AnswerExamApi(answers)}   >send </Button>
                      <Button variant='outlined'  onClick={()=>handelSubmitAnswers()}   >print </Button>

        </Grid>
    </Grid>
  )
}

export default ViewExam

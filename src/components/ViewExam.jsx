import React , {useState , useEffect} from 'react'
import { Grid , Paper , Button ,Chip, Card ,Divider, CardContent , Typography } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DoneIcon from '@mui/icons-material/Done';
import shadows from '@mui/material/styles/shadows';
import RetrieveExam from '../api/RetrieveExam';
import RetrieveOption from '../api/RetrieveOption';
import RetrieveQuestions from '../api/RetrieveQuestion';
const ViewExam = () => {

  const [examData , setExamData ] = useState([])
  const [questionData , setQuestionData ] = useState([])
  useEffect(()=>{
      const fetchData = async () =>{
      const res = await RetrieveExam(57)
      const data = res.data 
      setExamData(data)
      const res2 = await RetrieveQuestions(57)
      const data2 = res2.data 
      setQuestionData(data2)
    }

    fetchData()
  }
    
    
    
    ,[])
  


  const [selectedOption, setSelectedOption] = useState(choices[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return (
    <Grid container spacing={6} justifyContent="center" alignItems="center"   sx={{mt:"1%" , background:'#eee' }} >
        <Grid item xs={11} sm={8} md={6} xl={4} >
            <Card sx={{marginY:"5%" }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center"   dir='rtl' >
                <CardContent>
                  <Grid item xs={12} >
                    
                      <Typography variant='h5'>{examData.title} </Typography>                  
                  </Grid>
                 
                </CardContent>
               </Grid>
            </Card>

          
            {questionData.map((q,i)=>{
              console.log(q.question)




           
            return <Card key= {i} sx={{shadows: 4 ,marginY:"5%"}} >

                <CardContent>
                <Grid container spacing={2} justifyContent="center" alignItems="center"   dir='rtl' >
                  <Grid item xs={12} >
                    
                      <Typography variant='h6'>{q.question.question } </Typography>                  
                  </Grid>

                  <Grid item xs={12} justifyContent="center" alignItems="center" >
                    <Divider>
                        <Chip label="الاختيارات" />
                    </Divider>
                    
                  </Grid>
                 

                  
                  
                  {q.option.map((choice , index) => (

                    <Grid item xs={12} key={index}>
                    <RadioGroup value={selectedOption} onChange={handleChange}>
                    <FormControlLabel
                    dir='rtl'
                      key={choice.option}
                      value={choice.option}
                      control={
                        <Radio
                        dir='ltr'
                          sx={{
                            '&.Mui-checked': {
                              color: '#4caf50',
                            },
                            alignSelf:'flex-start',
                            '&.Mui-checked .MuiSvgIcon-root': {
                              display: 'block',
                            },
                          }}
                          icon={<Chip label={index} variant="outlined" />}
                          checkedIcon={<DoneIcon />}
                          lang='ar'
                        />
                      }
                      label={choice.option}
                      sx={{ border : selectedOption === choice ? '1px solid green' : '0px',
                      marginX : "0px", width:"100%" ,borderRadius:"5px"}}
                    />
                    </RadioGroup>
                   </Grid>
                  
                   
                   ))}
                 
                  
                  
                  
                 



                  </Grid>
                </CardContent>
                
            </Card>  })}

        </Grid>
    </Grid>
  )
}

export default ViewExam

import React  , {useState , useEffect , useContext , memo} from 'react'
import { Card , Select ,MenuItem ,Divider ,
         Switch, Stack , CardContent , Grid ,
         TextField , Typography, Button , 
        useTheme , useMediaQuery , SpeedDial ,SpeedDialIcon ,
    SpeedDialAction } from '@mui/material'
import CreateQuestion from './CreateQuestion';
import ListSubjects from '../api/ListSubjects';
import SaveIcon from '@mui/icons-material/Save';
import QuestionContext from '../context/QuestionDataContext';
import AddIcon from '@mui/icons-material/Add';
import SaveExam from '../api/SaveExamApi';
import OptionsContext from '../context/OptionsDataContext';
import CustomContainer from './CustomContainer';
import {schema } from '../utility/ValidateExamData'


const CreateExam = () => {
    const {options , tools} = useContext(OptionsContext)
    const {Question , functions } = useContext(QuestionContext)
    const [subjects , setSubjects ] = useState([])
    const [ examData , setExamData ] = useState({
        title : '' , subj : '' , start_date : '' , end_date : '' , exam_duration : 1 , 
        final : false , comment : '' , final_mark : 20
      })
    const [ examDataErrors , setExamDataErrors ] = useState({
        title : false , subj : false , start_date : false , end_date : false , exam_duration : false , 
        final : false , comment : false , final_mark : false
      })



    const Theme = useTheme()
    const isSmallScreen =useMediaQuery(Theme.breakpoints.down("sm")) 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    



    useEffect( ()=>{
        const  FetchData = async ()=>{
            const response = await ListSubjects()
            setSubjects(response.data)
        }
        FetchData()
        }   
    , [])

        
const ValidateExamData = (data) => {
    
    const result = schema.validate(data);
    if (result.error) {
        const key = result.error.details[0].context.key
       
        setExamDataErrors((prev) =>{
            return {
                ...prev , 
                [key] : true
            }
        })

        return false

        // handle validation error
      } else {
        const questionsAreValid = ValidateQuestionData() && ValidateOptionsData()
        return true && questionsAreValid
        
      }   
    }

    const ValidateQuestionData = () =>{
        var isValidQuestion = true
        Question.forEach(element => {
            if (element.question === ''){
                functions.setError(element.id , true)
                isValidQuestion = false
            }
           
        });
        return isValidQuestion

    }

    const ValidateOptionsData = () =>{
        var isValidOption = true 
        options.forEach(element => {
            if (element.option === ''){
                tools.setError(element.id , true)
                isValidOption = false
            }
        
    })
        
        return isValidOption
    }
          
    const SubmitExam = () =>{
        const isValid = ValidateExamData(examData)
        if (isValid){
            SaveExam(examData, Question , options)
        }

        


    }
    const handelChang = (e) =>{
        const {name , value , type } = e.target
        setExamData((prev) =>{
        return {
            ...prev , 
            [name] : type == 'checkbox' ? e.target.checked : value

        }
        } )
        setExamDataErrors((prev)=>{
            return {
                ...prev , 
                [name] : false
            }
        })
    }
  return (<>
    <CustomContainer   sx={{mt:"1%" ,bgcolor:'#eee'}} >
      
        
    
             <Card>   
                <CardContent>
                    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ position:'relative'}} >
                      

                        <Grid item xs={12}  >
                            <TextField 
                            placeholder='عنوان الاختبار'
                            fullWidth
                            dir='rtl'
                            error={examDataErrors.title}
                            name= 'title'
                            value={examData.title}
                            onChange={(e)=>{handelChang(e)}}
                            helperText={examDataErrors.title ? 'لا يمكن ان يكون عنوان الاختبار فارغ' : ''}
                            />
                        </Grid>

                        <Grid item xs={12}  >
                    
                            <Select
                                
                                dir='rtl'
                                fullWidth
                                name='subj'
                                error={examDataErrors.subj}
                                value={examData.subj}
                                onChange={(e)=>{handelChang(e)}}
                                helperText='لا يمكن ان يكون اسم الماده فارغ'
                                
                                >
                                {subjects.map((item , n )=>{
                                    const name = item.subject_name
                                    return <MenuItem key={n} value={item.pk}>{name}</MenuItem>
                                })}
                                
                            </Select>
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id="datetime-local"
                                placeholder='hello'
                                label="تاريخ نهاية الاختبار"
                                dir='rtl'
                                lang='ar'
                                error={examDataErrors.end_date}
                                type="datetime-local"
                                helperText={examDataErrors.end_date ? ' تاريخ غير صالح' :''}
                                fullWidth
                                InputLabelProps={{
                                shrink: true,
                                dir : "rtl"
                                }}
                                name='end_date'
                                value={examData.end_date}
                                onChange={(e)=>{handelChang(e)}}
                            />
                        </Grid>


                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="datetime-local"
                                label="تاريخ بداية الاختبار"
                                type="datetime-local"
                                
                                lang='ar'
                                error={examDataErrors.start_date}
                                helperText={examDataErrors.start_date ? ' تاريخ غير صالح' :''}
                                InputLabelProps={{
                                shrink: true,
                                dir : "rtl"
                                
                                }}
                                name='start_date'
                                value={examData.start_date}
                                onChange={(e)=>{handelChang(e)}}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField fullWidth
                                        dir='rtl'
                                        type='number' 
                                        placeholder='الدرحة النهائية' 
                                        inputProps={{ inputMode: 'numeric'
                                        , pattern: '[0-9]*' }} 
                                        name='final_mark'
                                        value={examData.final_mark}
                                        onChange={(e)=>{handelChang(e)}}
                                        error={examDataErrors.final_mark}
                                        helperText='k'
                                        />
                        </Grid>


                        <Grid item xs={6}>

                            <TextField 
                                fullWidth 
                                type='number' 
                                dir='rtl'
                                placeholder='مدة الاختبار ' 
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                                name='exam_duration'
                                value={examData.exam_duration}
                                onChange={(e)=>{handelChang(e)}}
                                error={ examDataErrors.exam_duration }
                                helperText='fff'

                                
                                />

                        </Grid>

                        <Grid item xs={12}>

                        <Stack  direction="row" justifyContent='center' spacing={1} alignItems="center">
                        <Typography variant='p' >الاختبار الاسبوعي</Typography>
                        <Switch  checked={examData.final} name='final' onChange={(e)=>{handelChang(e)}} inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography variant='p' >الاختبار النهائي</Typography>
                      </Stack>

                        </Grid>


                        <Grid item xs={12}>

                            <TextField 
                            fullWidth 
                            dir='rtl' 
                            placeholder='اضف تعليق '  
                            name='comment' 
                            value={examData.comment}  
                            onChange={(e)=>{handelChang(e)}}
                            />
                        </Grid>

                    </Grid>
                </CardContent>
             </Card>
  
  </CustomContainer>



  <CreateQuestion/>


  {isSmallScreen ?  <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}  
  divider={<Divider orientation="vertical" flexItem />} 
  sx={{position:"fixed" ,paddingY:"5px",boxShadow: 3 ,width:"90vw",left:0,bottom: "5px",bgcolor:"#fff" ,marginX:'5vw'}}>
  <Button variant='outlined' endIcon={ <SaveIcon />}  onClick={()=>{SubmitExam()}}>حفظ الاختبار </Button>

  <Button variant='outlined' endIcon={ <AddIcon />} onClick={()=>{functions.addQuestion()}}>اضافة سؤال </Button>


</Stack> : <SpeedDial
  ariaLabel="SpeedDial controlled open example"
  sx={{ position: 'fixed', bottom: 20, right: 50 }}
  icon={<SpeedDialIcon />}
  onClose={handleClose}
  onOpen={handleOpen}
  open={open}
>
    <SpeedDialAction
      icon={<SpeedDialIcon />}
      tooltipTitle={'اضافة سؤال'}
      onClick={()=>{functions.addQuestion()}}
    />

    <SpeedDialAction
      icon={ <SaveIcon />}
      tooltipTitle={'حفظ الاختبار'}
      onClick={()=>{SubmitExam()}}
    />
</SpeedDial>}
 
  </>
  )
}

export default memo(CreateExam)

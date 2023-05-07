import React  , {useState , useEffect , useContext} from 'react'
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
const CreateExam = () => {
    const {options , tools} = useContext(OptionsContext)
    const [examPk , setExamPk] = useState('')
    const Theme = useTheme()
    const isSmallScreen =useMediaQuery(Theme.breakpoints.down("sm")) 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [ examData , setExamData ] = useState({
        title : '' , subj : '' , start_date : '' , end_date : '' , exam_duration : 5 , 
        final : false , comment : '' , final_mark : 20
      })

    

    const {Question , functions } = useContext(QuestionContext)

    const [subjects , setSubjects ] = useState([])

    useEffect( ()=>{
        const  FetchData = async ()=>{
            const response = await ListSubjects()
            setSubjects(response.data)
        }
        FetchData()
        }   
    , [])
          
    const SubmitExam = () =>{

    }
    const handelChang = (e) =>{
        const {name , value , type } = e.target
        setExamData((prev) =>{
        return {
            ...prev , 
            [name] : type == 'checkbox' ? e.target.checked : value

        }
        } )
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
                            name= 'title'
                            value={examData.title}
                            onChange={(e)=>{handelChang(e)}}

                            />
                        </Grid>

                        <Grid item xs={12}  >
                    
                            <Select
                                dir='rtl'
                                fullWidth
                                name='subj'
                                value={examData.subj}
                                onChange={(e)=>{handelChang(e)}}
                                
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
                                type="datetime-local"
                               
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
  <Button variant='outlined' endIcon={ <SaveIcon />}  onClick={()=>{SaveExam(examData , Question , options)}}>حفظ الاختبار </Button>

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
      onClick={()=>{SaveExam(examData)}}
    />
</SpeedDial>}
 
  </>
  )
}

export default CreateExam

import React  , {useState  , useContext , memo} from 'react'
import { Divider , Stack , Button ,  SpeedDial ,SpeedDialIcon ,
    SpeedDialAction, 
    Snackbar , Alert} from '@mui/material'
import CreateQuestion from './CreateQuestion';
import InputLabel from '@mui/material/InputLabel';
import DialogContentText from '@mui/material/DialogContentText';
import SaveIcon from '@mui/icons-material/Save';
import QuestionContext from '../context/QuestionDataContext';
import AddIcon from '@mui/icons-material/Add';
import SaveExam from '../api/SaveExamApi';
import OptionsContext from '../context/OptionsDataContext';
import CustomContainer from './CustomContainer';
import {schema } from '../utility/ValidateExamData'
import useCreateExamHead from './CreateExamHead';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MainNav from './MainNav'
const CreateExam = () => {
    const {setExamDataErrors, examData , render } = useCreateExamHead()
    const {options , tools} = useContext(OptionsContext)
    const {Question , functions } = useContext(QuestionContext)
   



    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    const [openSuccess, setOpenSuccess] = useState(false);
    const handleOpenSuccess = () => setOpenSuccess(true);
    const handleCloseSuccess = () => setOpenSuccess(false);

    

    




        
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
            handleOpenDialog()
        }

        


    }
   
  return (<>
    <MainNav / >
    <CustomContainer   sx={{mt:"10%" ,bgcolor:'#eee'}} >
      
                {render}
    
             
  </CustomContainer>



  <CreateQuestion/>


  <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}  
  divider={<Divider orientation="vertical" flexItem />} 
  sx={{ display : {sm : "none"} , position:"fixed" ,paddingY:"5px",boxShadow: 3 ,width:"90vw",left:0,bottom: "5px",bgcolor:"#fff" ,marginX:'5vw'}}>
  <Button 
    variant='outlined' 
    endIcon={ <SaveIcon />}  
    onClick={SubmitExam}
    >حفظ الاختبار 
    
    </Button>

  <Button   
    variant='outlined' 
    endIcon={ <AddIcon />} 
    onClick={()=>{functions.addQuestion(tools.addOption)}}>اضافة سؤال 
    </Button>


</Stack> 

<SpeedDial
  ariaLabel="SpeedDial controlled open example"
  sx={{display : {sm : "flex" , xs : "none" } , position: 'fixed', bottom: 20, right: 50 }}
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
      onClick={()=>{SubmitExam() ; handleOpenSuccess()}}
    />
</SpeedDial>

<Dialog open={openDialog} > 
    <DialogTitle id="alert-dialog-title">
    {"هل تريد حفظ الاختبار ؟"}

    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>{SaveExam(examData, Question , options); handleCloseDialog(); handleOpenSuccess()}}>حفظ </Button>
      <Button onClick={handleCloseDialog} autoFocus>
        إلغاء
      </Button>
    </DialogActions>








 </Dialog>




 <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
          تم حفظ الإختبار بنجاح 
        </Alert>
      </Snackbar>
 
  </>
  )
}

export default memo(CreateExam)

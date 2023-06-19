import React , { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ViewExam from '../components/ViewExam'
import RetrieveExam from '../api/RetrieveExam'
import { Dialog , DialogActions,DialogTitle ,DialogContentText, Button ,DialogContent } from '@mui/material'
import StartExamApi from '../api/StartExamApi'
import { getUserId } from '../utility/local'
import GetStudentMarkApi from '../api/GetStudentMarkApi'

const ViewExamPage = () => {
    const [isExamAvailable , setIsExamAvailable] = useState(true)
    const [markId , setMarkId ] = useState(0)
    const [open , setOpen] = useState(true)
    const { examId } = useParams()
    const [examData , setExamData] = useState({})

    useEffect(()=>{
      
 
      const fetchData = async () =>{
        const res = await RetrieveExam(examId)
        const data = res.data 
        setExamData(data)
        const examDate = new Date(examData.end_date)
        const currentDate = new Date()
        if (examDate.getTime()  <  currentDate.getTime) {
          setIsExamAvailable(false)
        }





      const mark = await StartExamApi(getUserId(),examId)
      const markState = mark.data
      markState.status ? setMarkId(markState.id) : setIsExamAvailable(false)
      
      
        }
        fetchData()
     }, [])






    const handelTakeExam = () =>{
      setOpen(false)
      

    }





  return (<>
    <Dialog
        open={open}
       dir='rtl'
       lang='ar'
      >
        <DialogTitle >
          {isExamAvailable ? "هل تريد بدء الاختبار ؟" : "هذا الاختبار غير متوفر حاليا"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          مده الاختبار هي {examData.exam_duration} ساعة وينتهي بتاريخ  {examData.end_date}              
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handelTakeExam}>بدء الأختبار</Button>
          <Button variant='outlined' onClick={handelTakeExam} autoFocus>
            إلغاء
          </Button>
        </DialogActions>
      </Dialog>
    {!open ? <ViewExam examId={examId} data= {examData} markId = {markId}/> : null}
    
    
    </>
  )
}

export default ViewExamPage

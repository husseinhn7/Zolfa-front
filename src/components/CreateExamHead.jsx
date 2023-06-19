import React , {useState , useMemo , Memo, useEffect} from 'react'
import ListSubjects from '../api/ListSubjects'
import { Grid ,Card ,CardContent , Select , TextField ,MenuItem ,Stack ,Switch , Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';









const useCreateExamHead = () => {
    const [subjects , setSubjects ] = useState([])
    const [ examData , setExamData ] = useState({
        title : '' , subj : '' , start_date : '' , end_date : '' , exam_duration : 1 , 
        final : false , comment : '' , final_mark : 20
      })
    const [ examDataErrors , setExamDataErrors ] = useState({
        title : false , subj : false , start_date : false , end_date : false , exam_duration : false , 
        final : false , comment : false , final_mark : false
      })


      useEffect( ()=>{
        const  FetchData = async ()=>{
            const response = await ListSubjects()
            setSubjects(response.data)
        }
        FetchData()
        }   
    , [])


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



    const MemoizedExamHead = useMemo(()=>{ 
  return (
    { setExamDataErrors ,
        examData ,

        
        render : <Card>   
        <CardContent>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ position:'relative'}} >
                

                <Grid item xs={12}  >
                    <InputLabel sx={{pr:1}} dir='rtl' htmlFor="examTitle" >عنوان الاختبار</InputLabel>
                    <TextField 
                    id='examTitle'
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
                <InputLabel sx={{pr:1}} dir='rtl' htmlFor="subject">المادة</InputLabel>
            
                    <Select
                        id="subject"
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
                <InputLabel sx={{pr:1}} dir='rtl' htmlFor="endDate">تاريخ نهاية الاختبار</InputLabel>
                    <TextField

                        id="endDate"
                        placeholder='hello'
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
                <InputLabel sx={{pr:1}} dir='rtl' htmlFor="startDate">تاريخ بداية الإختبار</InputLabel>
                    <TextField
                        fullWidth
                        id="startDate"
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
                <InputLabel sx={{pr:1}} dir='rtl' htmlFor="finalMark">الدرجة النهائية</InputLabel>
                    <TextField fullWidth
                                id='finalMark'
                                dir='rtl'
                                type='number' 
                                inputProps={{ inputMode: 'numeric'
                                , pattern: '[0-9]*' }} 
                                name='final_mark'
                                value={examData.final_mark}
                                onChange={(e)=>{handelChang(e)}}
                                error={examDataErrors.final_mark}
                                />
                </Grid>


                <Grid item xs={6}>
                <InputLabel sx={{pr:1}} dir='rtl' htmlFor="examDuration">مدة الاختبار</InputLabel>
                    <TextField 
                        id='examDuration'
                        fullWidth 
                        type='number' 
                        dir='rtl'
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                        name='exam_duration'
                        value={examData.exam_duration}
                        onChange={(e)=>{handelChang(e)}}
                        error={ examDataErrors.exam_duration }

                        
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
        </Card>}
  )


},[examData , examDataErrors , subjects])


return MemoizedExamHead

}
export default useCreateExamHead

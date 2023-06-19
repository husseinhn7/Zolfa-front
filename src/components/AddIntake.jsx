import React ,{useState , useEffect} from 'react'
import CustomContainer from './CustomContainer'
import { Grid ,Card ,CardContent , Select , TextField ,MenuItem ,Stack ,Switch , Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import ListLevelsApi from '../api/ListLevelsApi';

const AddIntake = () => {
    const [levels , setLevels] = useState([])
    const [data , setData] = useState({
        name : '' ,
        level  : '' ,
        intake_description : '' ,
        start_date  : '' ,
        expire_date : '' ,
        telegram_link : '',
       
    })

    const handelChange = (e)=>{
        console.log(levels)
        console.log(data)
        const {name , value , type } = e.target
        setData((prev) =>{
            return {
                ...prev , 
                [name] :   value
            }
        })
    }
    

    useEffect(()=>{
        const levelsData = async () =>{
            const response = await ListLevelsApi()
            setLevels(response.data) 
            console.log(levels)
        }
        levelsData()
    } , []  )
  return (
    
    <CustomContainer>
    <Card>   
    <CardContent>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ position:'relative'}} >
            

            <Grid item xs={12}  >
                <InputLabel sx={{pr:1}} dir='rtl' htmlFor="intakeTitle" >إسم الدفعة</InputLabel>
                <TextField 
                id='intakeTitle'
                placeholder='إسم الدفعة'
                fullWidth
                dir='rtl'
                
                name= 'name'
                value={data.name}
                onChange={(e)=>{handelChange(e)}}
                />
            </Grid>

            <Grid item xs={12}  >
            <InputLabel sx={{pr:1}} dir='rtl' htmlFor="levels">المستوى</InputLabel>        
                <Select
                    id="levels"
                    dir='rtl'
                    fullWidth
                    name='level'
                    value={data.level}
                    onChange={(e)=>{handelChange(e)}}
                    >
                    {levels.map((item , n )=>{
                        const name = item.level_name
                        return <MenuItem key={n} value={item.pk}>{name}</MenuItem>
                    })}
                   
                    
                </Select>
            </Grid>

            <Grid item xs={12}  >
                <InputLabel sx={{pr:1}} dir='rtl' htmlFor="intakeDescription" >وصف الدفعة</InputLabel>
                <TextField 
                id='intakeDescription'
                placeholder=' وصف الدفعة'
                fullWidth
                dir='rtl'
               
                name= 'intake_description'
                value={data.intake_description}
                onChange={(e)=>{handelChange(e)}}
                />
            </Grid>

            <Grid item xs={12}>
            <InputLabel sx={{pr:1}} dir='rtl' htmlFor="startDate">تاريخ بداية الدفعة</InputLabel>
                <TextField

                    id="startDate"
                    placeholder='hello'
                    dir='rtl'
                    lang='ar'
                    
                    type="datetime-local"
                    fullWidth
                    InputLabelProps={{
                    shrink: true,
                    dir : "rtl"
                    }}
                    name='start_date'
                    value={data.start_date}
                    onChange={(e)=>{handelChange(e)}}
                />
            </Grid>


            <Grid item xs={12}>
            <InputLabel sx={{pr:1}} dir='rtl' htmlFor="endDate">تاريخ نهاية الدفعة</InputLabel>
                <TextField
                    fullWidth
                    id="endDate"
                    type="datetime-local"
                    
                    lang='ar'
                   
                    InputLabelProps={{
                    shrink: true,
                    dir : "rtl"
                    
                    }}
                    name='expire_date'
                    value={data.expire_date}
                    onChange={(e)=>{handelChange(e)}}
                />
            </Grid>

          
        <Grid item xs={12}  >
            <InputLabel sx={{pr:1}} dir='rtl' htmlFor="intakeTitle"  >رابط مجموعة التليجرام</InputLabel>
            <TextField 
            id='intakeTitle'
            placeholder='إسم الدفعة'
            fullWidth
            dir='rtl'
            
            name= 'telegram_link'
            value={data.telegram_link }
            onChange={(e)=>{handelChange(e)}}
            />
        </Grid>

           



           

        </Grid>
    </CardContent>
    </Card>




      
    </CustomContainer>
  )                         
}

export default AddIntake

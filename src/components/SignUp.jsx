import React , {useState} from 'react'
import { setLocalItem } from '../utility/local';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField , Grid  , Divider,
  Checkbox ,Select , MenuItem } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import SignUpApi from '../api/SignUpApi';





const SignUp = () => {
  const [error , setError] =useState(false)
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const [data , setData] = useState({
    name : '' , 
    username : '' ,
    password : '', 
    age : '' , 
    gender : '' ,
    education : '' ,
    courses : false , 
    courses_description : '' ,
    level : '',
    intake : '' , 
 })

 const HandelChange = (e) =>{
    const {name , value , type ,checked}  = e.target
    console.log(value , name , checked)
    setData((oldData)=>{
        return {
            ...oldData ,
            [name] : type === 'checkbox' ? checked : value 
        }
    })
}
const HandelSubmit = (data) => {
  const sendData = async ()=>{ 
      
    try {
        const response = await SignUpApi(data)
        const status =  response.status
        const token = response.data

        if (status === 201){
          // setLocalItem('token' , token)
          // const accessToken = jwtDecode(token.access)
          // setUser(true , accessToken.is_staff)
          console.log(response.data)
        }
      } catch (AxiosError) {
      setError(true)
      console.log(AxiosError.response.data)
      }


}
sendData()
}
  return (
    <>
    <DialogTitle sx={{textAlign:'center'}}>{"إنشاء حساب"}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} justifyContent="center" alignItems="center"  >

          <Grid item xs={12}>
            <TextField dir="rtl" 
              sx={{width : "100%"}} 
              size="small" 
              placeholder="الاسم"
              name='name' 
              value={data.name} 
              onChange={(e) =>{  HandelChange(e)} } 
              
              error={error}
              />
          </Grid>


          <Grid item xs={12}>
            <TextField 
              error={error}
              dir="rtl" 
              sx={{width : "100%"}} 
              size="small"
              placeholder='اسم المستخدم'
              name='username' 
              value={data.username} 
              onChange={(e) =>{  HandelChange(e)} }
              />
          </Grid>

          <Grid item xs={12}>
            <TextField dir="rtl" 
              sx={{width : "100%"}} 
              size="small" 
              placeholder='كلمة المرور'
              name='password' 
              value={data.password} 
              onChange={(e) =>{  HandelChange(e)} } 
              
              error={error}
              />
          </Grid>





          <Grid item xs={12}>
            <TextField dir="rtl" 
              sx={{width : "100%"}} 
              size="small" 
              placeholder="السن"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
              type='number' 
              name='age' 
              value={data.age} 
              onChange={(e) =>{  HandelChange(e)} } 
              
              error={error}
              /> 
          </Grid> 
    
          <Grid item xs={12} justifyContent='flex-end' alignItems='center' display='flex'>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                width='%100'
                dir='rtl'
              >
                <FormControlLabel name='gender' onChange={(e)=>{HandelChange(e)}} value="ذكر" control={<Radio />} label="ذكر" />
                <FormControlLabel name='gender' onChange={(e)=>{HandelChange(e)}} value="اُنثى" control={<Radio />} label="اُنثى" />
                <FormControlLabel name='gender' onChange={(e)=>{HandelChange(e)}} value="اخري" control={<Radio />} label="اخري" />
                
              </RadioGroup>
            </FormControl>
        
          </Grid> 
  
  
          <Grid item xs={12}>
            <Select
              dir='rtl'
              fullWidth
              name='education'
              size='small'
              onChange={(e)=>{HandelChange(e)}}
              >
              <MenuItem  value={'item.pk'}>{'name'}</MenuItem>
              <MenuItem  value={'item.pk'}>{'name'}</MenuItem>
              <MenuItem  value={'item.pk'}>{'name'}</MenuItem>
              <MenuItem  value={'item.pk'}>{'name'}</MenuItem>
            
              
          </Select>


          </Grid>  


          <Grid item xs={12}>
              <FormControlLabel
              sx={{width : "100%" }}
              onChange={(e)=>{HandelChange(e)}}
                label="هل حصلت علي اي  دورات شرعيه من قبل"
                  control={<Checkbox checked={data.courses } name='courses' value={data.courses} onChange={(e)=>{HandelChange(e)}} />}
                  dir='rtl'
                />

          </Grid>
          <Grid item xs={12}  sx={{display : data.courses ? 'block' : 'none' , transition:'1s'}} >
                <TextField dir="rtl" 
                  sx={{width : "100%"}}
                  size="small" 
                  placeholder="برجاء كتابه اي دورات حصلت عليها"
                  name='courses_description' 
                  value={data.courses_description} 
                  onChange={(e) =>{  HandelChange(e)} } 
                  error={error}
                  
                
                
                  />


          </Grid>  



          <Grid item xs={6}>
            <Select
              dir='rtl'
              fullWidth
              name='subj'
              size='small'
              
            
              
              >
              <MenuItem  value={'item.pk'}>{'name'}</MenuItem>
              
                
            </Select>


          </Grid>  

          <Grid item xs={6}>
            <Select
              dir='rtl'
              fullWidth
              name='subj'
              size='small'
              
              
              
              >
              <MenuItem  value={'item.pk'}>{'name'}</MenuItem>
              
              
            </Select>


          </Grid>


       

       

        

        <Grid item xs={12} >
          <Divider></Divider>
        
        </Grid>

        <Grid item xs={12} md={4} >
          <Button 
            variant='outlined' 
            sx={{width:'100%'}}
            onClick={()=>{HandelSubmit(data)}}
            >تسجيل الدخول </Button>
      
        </Grid>

       

      </Grid>
</DialogContent>
      
    </>
  )
}

export default SignUp;

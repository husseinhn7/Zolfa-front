import React , {useState , useContext } from 'react'
import { setLocalItem } from '../utility/local';
import jwtDecode from 'jwt-decode';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { TextField , Grid  , Divider ,Link, Chip , InputAdornment} from '@mui/material';
import Login from '../api/LogInApi';
import AuthContext from '../context/AuthContext';



const LogIn = () => {
  const {isAuthenticated , isStaff ,setUser} = useContext(AuthContext)
  const [error , setError] =useState(false)





  const [data , setData] = useState({
    username : '' ,
    password : ''
 })
const HandelSubmit = (data) =>{
    const sendData = async ()=>{ 
      
      try {
          const response = await Login(data)
          const status =  response.status
          const token = response.data
          if (status === 200){
            setLocalItem('token' , token)
            const accessToken = jwtDecode(token.access)
            setUser(true , accessToken.is_staff)
          }
        } catch (AxiosError) {
        setError(true)
        console.log(AxiosError)
        }

     
      
      
    }

    sendData()
}
const HandelChange = (e) =>{
    const {name , value}  = e.target
    setData((oldData)=>{
        return {
            ...oldData ,
            [name] : value 
        }
    })
}

  return (
    
      <>
        <DialogTitle sx={{textAlign:'center'}}>{"تسجيل الدخول"}</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} justifyContent="center" alignItems="center"  >
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
                InputProps={{
                  endAdornment: <InputAdornment position="end"><PersonIcon/></InputAdornment>
                }}
                
                
                />
                
        
              </Grid>
              <Grid item xs={12}>
                <TextField dir="rtl" 
                sx={{width : "100%"}} 
                size="small" 
                placeholder='كلمة المرور'
                type='password' 
                name='password' 
                value={data.password} 
                onChange={(e) =>{  HandelChange(e)} } 
                InputProps={{
                  endAdornment: <InputAdornment position="end"><KeyIcon/></InputAdornment>
                }}
                error={error}
                helperText={error ? 'خطأ اسم المستخدم او كلمة المرور' :''}
                
                
                
                />
              </Grid>
              <Grid item xs={12} sx={{display:'flex' , justifyContent:'center'}}  >
                  <Link href='/' underline="none" >هل نسيت كلمة المرور ؟</Link>
              
              </Grid>

              <Grid item xs={12} md={4} >
                <Button 
                variant='contained' 
                sx={{width:'100%'}}
                onClick={()=>{HandelSubmit(data)}}
                 >تسجيل الدخول </Button>
              
              </Grid>

              

              <Grid item xs={12} >
                <Divider><Chip label="او" /></Divider>
              
              
              </Grid>

              <Grid item xs={12}sx={{display:'flex' , justifyContent:'center'}}  >
                <Link href='/test' underline="none">إنشاء حساب جديد</Link>
          
              </Grid>

            </Grid>
      </DialogContent>
      </>
   
  )
}

export default LogIn

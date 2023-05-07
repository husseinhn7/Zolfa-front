import React , {useState , useContext ,forwardRef} from 'react'
import {  setLocalItem } from '../utility/local';
import jwtDecode from 'jwt-decode';
import CustomContainer from './CustomContainer'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { TextField , Grid  , Divider ,Link, Chip , InputAdornment} from '@mui/material';
import Login from '../api/LogInApi';
import AuthContext from '../context/AuthContext';



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const LogIn = () => {
  const {setUser} = useContext(AuthContext)


  const [open, setOpen] = useState(false);
  const [error , setError] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



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
            console.log(response.data)
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
    <div>
    <Button variant="outlined" onClick={handleClickOpen}>
      Slide in alert dialog
    </Button>
    <CustomContainer>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
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
                variant='outlined' 
                sx={{width:'100%'}}
                onClick={()=>{HandelSubmit(data)}}
                 >تسجيل الدخول </Button>
              
              </Grid>

              <Grid item xs={12} >
                <Divider><Chip label="او" /></Divider>
              
              
              </Grid>

              <Grid item xs={12}sx={{display:'flex' , justifyContent:'center'}}  >
                <Link href='/' underline="none">إنشاء حساب جديد</Link>
          
              </Grid>

            </Grid>
      </DialogContent>
      
    </Dialog>
  
</CustomContainer>
    </div>
  )
}

export default LogIn

import  React , {useState , forwardRef} from 'react';
// import logo from '../images/light-zolfa-removebg.png'
import AppBar from '@mui/material/AppBar';
import Zolfa from '../images/light-zolfa-removebg.png'
import {Link}  from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import SignUp from './SignUp';
import SideNave from './SideNave';


import LogIn from './LogIn';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




function ResponsiveAppBar() {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [open , setOpen ] = useState(false);


  const [login , setLogin ] = useState(true)
  const handleClickOpenDialog = (login) => {
    setLogin(login)
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  

 

  return (
    <AppBar position="fixed" sx={{bgcolor:"#fff"}}>
     
      <Container maxWidth="lg" sx={{bgcolor:"#0000"}}>
     
        <Toolbar disableGutters>
        
      <a href='/nav/' style={{display:'flex' , alignItems:"center" , justifyContent:"center"}}>
      <img src={Zolfa} alt=""  width='50px' height='50px'/>
    </a>
          
            
            <Box sx={{flexGrow:1}}>
            
            </Box>

            
            <MenuIcon
            sx={{color:"#000" }}

            size="large"
            edge="end"
            color="inherit"
            onClick={()=>setOpen(true)}>
            </MenuIcon>
            <SideNave open={open} anchor='right'  onClose={()=>setOpen(false)} />


{
  //dialog for log in pop up 
}
          <Dialog
            open={openDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleCloseDialog}
            aria-describedby="alert-dialog-slide-description"
            >
            {login ? <LogIn/> : <SignUp/>}
          </Dialog>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
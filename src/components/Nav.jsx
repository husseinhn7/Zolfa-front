import  React , {useState , forwardRef} from 'react';
// import logo from '../images/light-zolfa-removebg.png'
import AppBar from '@mui/material/AppBar';
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


import LogIn from './LogIn';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




function ResponsiveAppBar() {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);


  const [login , setLogin ] = useState(true)
  const handleClickOpenDialog = (login) => {
    setLogin(login)
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const handleOpen = (event) => {
    setAnchor(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchor(null);
  };

 

  return (
    <AppBar position="static" sx={{bgcolor:"#fff"}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
        <IconButton
        sx={{color:"#000", mr : 1 , display:{md:'none'}}}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon/>
      </IconButton>
          
            
            <Box sx={{flexGrow:1}}>
            
            </Box>

            <Stack  
              direction='row' 
              divider={<Divider orientation="vertical" flexItem /> }
              spacing={1} 
              sx={{display :{ xs : 'none' ,   md:'flex'}}}>
              <Button  variant='contained' size='small' onClick={()=>handleClickOpenDialog(true)}>تسجيل الدخول</Button>
              <Button  variant='contained' size='small' onClick={()=>handleClickOpenDialog(false)}>sdj</Button>
              
            
            </Stack>
            <IconButton
            sx={{color:"#000" , display:{md:'none'}}}

            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={handleOpen}>
            <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchor}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}>

              <MenuItem onClick={()=>{handleClose() , handleClickOpenDialog() }}>log in </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
    
            </Menu> 


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
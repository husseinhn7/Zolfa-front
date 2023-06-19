import React , {useContext} from 'react'
import Checkbox from '@mui/material/Checkbox';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import { Button } from '@mui/material';
import ThemeContext  from '../context/ThemeContext'
import { getLocalItem } from '../utility/local';
import jwtDecode from 'jwt-decode';
const ThemeToggler = () => {
  return (<>

    <Checkbox 
    size='small'
    aria-label=''
    checkedIcon = {<DarkModeSharpIcon/>}
    icon = {<LightModeSharpIcon/>}

       />

       <Button variant='outlined' onClick={()=>{
        console.log(jwtDecode(getLocalItem('token').access))
       }}> call </Button>
       </>
  )
}

export default ThemeToggler

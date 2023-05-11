import React , {useContext} from 'react'
import Checkbox from '@mui/material/Checkbox';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import ThemeContext  from '../context/ThemeContext'

const ThemeToggler = () => {
  return (
    <Checkbox 
    size='small'
    aria-label=''
    checkedIcon = {<DarkModeSharpIcon/>}
    icon = {<LightModeSharpIcon/>}
       />
  )
}

export default ThemeToggler

import React ,{ useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Box, Button,Divider, Drawer , Stack, Typography} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';





const SideNavSection = (props) => {
    const navigate = useNavigate();



    const handleClick = (url) => {
        navigate(url);
      }






  return (
    <Accordion dir='rtl' sx={{border:'none'}}>
        <AccordionSummary
        sx={{'&:hover' : {background : '#eee' , cursor : 'pointer'}}}
          expandIcon={<ExpandMoreIcon />}>
            <Typography > {props.title} </Typography>
        </AccordionSummary>

                <AccordionDetails sx ={{display: 'flex' , direction:'row' }}>
                    <Stack direction='column' divider={<Divider  flexItem />} spacing={1} >
                        {props.pages.map((page , index)=>{
                            return <Button endIcon={page.icon} sx={{ display: 'flex', justifyContent: 'space-between' , width : {xs : '230px' , sm : "270px"}}} key={index} size='small' variant='filled' onClick={()=>handleClick(page.url)}  > {page.title}</Button>
                        })}
                    
                    
                    

                    </Stack>
                </AccordionDetails>
        
        
        
        
        
        
        </Accordion>
  )
}

export default SideNavSection

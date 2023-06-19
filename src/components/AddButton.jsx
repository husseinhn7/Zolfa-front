import React ,{useMemo} from 'react'
import { Grid , Stack , IconButton , Icon } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';







const AddButton = (props) => {
    const mm = useMemo(()=>{
        return <Grid item xs={2} alignContent='center' justifyContent="center" alignItems="center">
        <Stack justifyContent="center" alignItems="center">
            <IconButton xs={{ width : '100%'}}  variant='outlined' size='small' onClick={()=>{props.addOption(props.id)}} ><Icon> <AddCircleOutlineIcon/> </Icon> </IconButton>
        </Stack>
    </Grid>
    }, [])
  return mm
}

export default AddButton

import React , {memo, useMemo} from 'react'
import { Grid , TextField , InputAdornment , IconButton  , Divider , Chip} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Demo =(props) => {
    const MemoDemo = useMemo(()=>{
        return (
            <React.Fragment>
            <Grid item xs={12} >
            <TextField 
                error={props.error}
                helperText={props.error ? 'لا يمكن ان يكون رأس السؤال فارغ' : ''}
                fullWidth
                placeholder='راس السؤال'
                name='question'
                value={props.question} 
                onChange={(e)=>{props.changeQuestion(props.id , e.target.value)}}
                InputProps={{
                    style : {paddingLeft : 0 , 
                             } , 
                    
        
                    endAdornment: <InputAdornment position="end">
                                        <IconButton aria-label="delete" 
                                            onClick={()=>{props.handelDeleteQuestion(props.id)}}
                                        >
                                    <DeleteIcon />
                    </IconButton></InputAdornment>
                    }}         
            /> 
            
            </Grid>
            <Grid item xs={12} justifyContent="center" alignItems="center" >
                <Divider>
                    <Chip label="الاختيارات" />
                </Divider>
            </Grid>     
            </React.Fragment>
          )

        
    } , [ props.error , props.question] )  


return MemoDemo
}

export default Demo

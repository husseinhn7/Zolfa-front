import React , {useMemo} from 'react'
import { TextField , Grid , Radio , InputAdornment , IconButton   } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';






const CreateOption = (props) => {
    const MemoCreateOption = useMemo(()=>{

        return <Grid  item xs={12}>
        <TextField
            error={props.error}
            helperText={props.error ? 'لا يمكن ان يكون هذا الاختيار فارغ': '' }
            multiline
            fullWidth  
            size='small' 
            id="fullWidth"
            name = 'option'
            value = {props.option} 
            onChange = { e=>{props.changeOption(props.id , props.questionId,e.target.value)}}
            InputProps={{
            style : {paddingLeft : 0 , 
                    paddingRight : 0 } , 
            endAdornment:   <InputAdornment position="end"> 
                                <Radio  
                                value={true}
                                checked= {props.isCorrectOption === true }
                                name = {`${props.questionId}`} 
                                onChange={(e)=>{props.CorrectOption(props.id , props.questionId,e.target.checked)}}
                                />
                            </InputAdornment>,

            startAdornment: <InputAdornment position="start">
                                <IconButton aria-label="delete" 
                                    onClick={()=>{props.deleteOption(props.id , 'o')}}
                                >
                            <DeleteIcon />
            </IconButton></InputAdornment>
            }}    
        />  
    </Grid>









    },[props.error , props.option ,props.isCorrectOption ])
  return MemoCreateOption
}

export default CreateOption





import React from 'react'
import { Grid } from '@mui/material'

const CustomContainer = (props) => {
  return (
    <Grid container spacing={6} justifyContent="center" alignItems="center"   sx = {props.sx} >
        <Grid item xs={11} sm={8} md={6} xl={4}  >
            {props.children}
        </Grid>
    </Grid>
  )
}

export default CustomContainer

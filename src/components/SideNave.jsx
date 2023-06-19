import React from 'react'
import { Box, Drawer , Stack, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SideNavSection from './SideNavSection';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const SideNave = (props) => {
   return (

    <Drawer {...props}>
        <Box sx ={{width : {xs : '260px' , sm : "300px" , p:"10px"}}}>
        
          
        
          
        
          <SideNavSection pages={[{ icon :<AddIcon   /> , title :  'إضافة إختبار' , url : '/create-exam'}
          ,{icon : <DeleteIcon /> ,  title :  'حذف إختبار' , url : '/create-exam'} ]} title='الاختبارات' />

          <SideNavSection pages={[{icon :<SearchIcon   /> , title :  'البحث عن طالب ' , url : '/create-exam'},
          { icon :<EditIcon/> , title :  'تعديل بيانات طالب' , url : '/create-exam'} ]} title='الطلاب' />
        
          <SideNavSection pages={[{ icon :<AddIcon/> , title :  'إضافة درس' , url : '/create-exam'},
          { icon :<EditIcon/> , title :  'تعديل درس' , url : '/create-exam'} ]} title='الدروس' />

          <SideNavSection pages={[{ icon :<AddIcon/> , title :  'إضافة دورة' , url : '/create-exam'},
          { icon :<EditIcon/> , title :  'تعديل بيانات دورة' , url : '/create-exam'} ]} title='الدورات' />

          <SideNavSection pages={[{ icon :<AddIcon/> , title :  'إضافة دفعة' , url : '/create-exam'},
          { icon :<EditIcon/> , title :  'تعديل بيانات دفعة' , url : '/create-exam'} ]} title='الدفع' />

          <SideNavSection pages={[{ icon :<AddIcon/> , title :  'إضافة مادة' , url : '/create-exam'},
          { icon :<EditIcon/> , title :  'تعديل بيانات مادة' , url : '/create-exam'} ]} title='المواد' />

           <SideNavSection pages={[{ title :  'st' , url : '/create-exam'},
           { title :  'st' , url : '/create-exam'} ]} title='الاحصائيات' />

           <SideNavSection pages={[{ icon : <PersonAddAlt1Icon /> , title : 'إضافة مشرف' , url : '/create-exam'},
           {icon :<EditIcon/> , title :  'تعديل بيانات مشرف' , url : '/create-exam'} ]} title='الاشراف' />

           <SideNavSection pages={[{ title :  'st' , url : '/create-exam'},{ title :  'st' , url : '/create-exam'} ]} title='الصفحة الرئيسية' />


        
        
        
        

    
    
    </Box>
    
    </Drawer> 
    
    
    )
}

export default SideNave

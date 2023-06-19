import Api   from './Base'



const ListSubjects =  () => {
    return  Api.get('levels/list-subjects')
       
}

export default ListSubjects

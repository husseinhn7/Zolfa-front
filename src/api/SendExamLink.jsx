import Api from "./Base";



const SendExamLink = (examPk) => {
    const examLink = `http://localhost:3000/exam/${examPk}`
    const data = {link : examLink}
    Api.post('bot/get/' , data )
    .then((response)=>{
        if (response.status === 200 ){
            console.log(response.data)
        }
        else {
            console.log(response)
        }
    })
}

export default SendExamLink

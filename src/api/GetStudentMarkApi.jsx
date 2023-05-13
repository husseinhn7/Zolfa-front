import Api from "./Base"
const GetStudentMarkApi = (studentPk , ExamPk) => {
  return Api.get(`http://192.168.1.8:8000/exams/retrieve-mark/${studentPk}/${ExamPk}`)
  
}

export default GetStudentMarkApi
 
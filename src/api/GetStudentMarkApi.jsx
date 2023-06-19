import Api from "./Base"
const GetStudentMarkApi = (studentPk , ExamPk) => {
  return Api.get(`exams/retrieve-mark/${studentPk}/${ExamPk}`)
  
}

export default GetStudentMarkApi
 
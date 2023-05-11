import React from 'react'
import { useParams } from 'react-router-dom'
import ViewExam from '../components/ViewExam'


const ViewExamPage = () => {
    const { examId } = useParams()
  return (
    <ViewExam examId={examId} />
  )
}

export default ViewExamPage

import React from 'react'
import { Outlet } from 'react-router-dom'
import { QuestionProvider } from '../context/QuestionDataContext';
import { OptionsProvider } from '../context/OptionsDataContext';

const ExamDataProvider = () => {
  return (
    <OptionsProvider>
        <QuestionProvider>

            <Outlet />

        </QuestionProvider>
    </OptionsProvider>
  )
}

export default ExamDataProvider

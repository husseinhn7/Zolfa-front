import PrivateRoute   from './utility/PrivateRoute'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { QuestionProvider } from './context/QuestionDataContext';
import { OptionsProvider } from './context/OptionsDataContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import CreateExam from './components/CreateExam';
import CreateQuestion from './components/CreateQuestion';
import ViewExam from './components/ViewExam';
import RadioButtonsGroup from './components/pl';
import ResponsiveAppBar from './components/Nav';
import LogIn from './components/LogIn';
import PrivetRoute from './utility/PrivateRoute';

import ThemeToggler from './components/ThemeToggler';



const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});




function App() {

  return (
      <div>
      
    <AuthProvider>
      <OptionsProvider>
        <QuestionProvider>
          <ThemeProvider theme={darkTheme}>
          <CssBaseline />


            <Router>        
              <Routes>
                <Route path ='/mui' element={<CreateExam/>} />
                <Route element={<PrivateRoute />}>
                  <Route path='test' element={<ViewExam examId={57}/>} /> 
                </Route>
                <Route path ='/exam' element={<ViewExam examId={57}/>} />
                <Route path ='/nav' element={<ResponsiveAppBar />} />
                <Route path ='/log' element={<LogIn />} />
                <Route path ='/theme' element={<ThemeToggler />} />

              </Routes>
            </Router>

          </ThemeProvider>

        </QuestionProvider>
      </OptionsProvider>
    </AuthProvider>
      
      
      
      
      
      
      
      
      
      
      
      </div>
        
  )
}

export default App

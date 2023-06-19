import PrivateRoute   from './utility/PrivateRoute'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import ExamDataProvider from './utility/ExamDataProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from './context/AuthContext';
import ViewExam from './components/ViewExam';
import RadioButtonsGroup from './components/pl';
import LandingNav from './components/LandingNav';
import LogIn from './components/LogIn';
import PrivetRoute from './utility/PrivateRoute';
import ViewExamPage from './pages/ViewExamPage';
import ThemeToggler from './components/ThemeToggler';
import CreateExamPage from './pages/CreateExamPage';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import SideNave from './components/SideNave';
import MainNav from './components/MainNav'
import AddIntake from './components/AddIntake';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});




function App() {

  return (
      <div>
      
    <AuthProvider>
      
          <ThemeProvider theme={darkTheme}>
          <CssBaseline />


            <Router>        
              <Routes>
                <Route element={ <AuthenticatedRoute /> }>
                  
                
                
                
                
                
                
                
                
                
                
                
                
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path='test/:examId' element={<ViewExamPage />} /> 
                </Route>
                <Route path ='/exam/:examId' element={<ViewExamPage />} />
                
                <Route element={<ExamDataProvider /> }>
                  <Route path ='/create-exam/' element={<CreateExamPage />} />
                </Route>
                
                <Route path ='/nav' element={<LandingNav />} />
                <Route path ='/log' element={<LogIn />} />
                <Route path ='/theme' element={<SideNave />} />
                <Route path ='/main' element={<AddIntake/>} />

              </Routes>
            </Router>

          </ThemeProvider>

       
    </AuthProvider>
      
      
      
      
      
      
      
      
      
      
      
      </div>
        
  )
}

export default App

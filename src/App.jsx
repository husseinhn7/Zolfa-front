import PrivateRoute   from './utility/PrivateRoute'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { QuestionProvider } from './context/QuestionDataContext';
import { OptionsProvider } from './context/OptionsDataContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import CreateExam from './components/CreateExam';
import CreateQuestion from './components/CreateQuestion';
import ViewExam from './components/ViewExam';
import RadioButtonsGroup from './components/pl';
const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});




function App() {

  return (
      <div>
      
      
    <OptionsProvider>
      <QuestionProvider>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />


        <Router>        
          <Routes>
            <Route path ='/mui' element={<CreateExam/>} />
            <Route path ='/exam' element={<ViewExam/>} />

          </Routes>
        </Router>

        </ThemeProvider>

      </QuestionProvider>
    </OptionsProvider>
      
      
      
      
      
      
      
      
      
      
      
      </div>
        
  )
}

export default App

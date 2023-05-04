import PrivateRoute   from './utility/PrivateRoute'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { QuestionProvider } from './context/QuestionDataContext';
import { OptionsProvider } from './context/OptionsDataContext';
import CreateExam from './components/CreateExam';
import CreateQuestion from './components/CreateQuestion';

function App() {

  return (
      <div>
      
      
    <OptionsProvider>
      <QuestionProvider>



        <Router>        
          <Routes>
          <Route path ='/mui' element={<CreateExam/>} />
          </Routes>
        </Router>


      </QuestionProvider>
    </OptionsProvider>
      
      
      
      
      
      
      
      
      
      
      
      </div>
        
  )
}

export default App

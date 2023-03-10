import './App.css';
import './index.css'


import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';

function App() {

  return ( 
    
   
      <BrowserRouter>
        <Header>
        <Routes>
       
            <Route path='/dictionary' element={<Dictionary />}></Route>
            <Route path='/definition' element={<Definition />}></Route>
            <Route path='/definition/:search' element={<Definition />}></Route>
            <Route path='/404' element={<NotFound />}></Route>
            <Route path='*' element={<NotFound />}></Route>




          </Routes>
        </Header>
        
        </BrowserRouter>
  

    
 

    
  )
    
    
  
}

export default App;

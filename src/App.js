
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import Notestate from '../src/context/notes/Notestate'
import Home from './components/Home'
import About from './components/About'
import Update from './components/Update'
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <Notestate>

    
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}>
            
          </Route>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
         <Route exact path="/update" element={<Update/>}>

         </Route>
         <Route exact path='/login' element={<Login/>}></Route>
         <Route exact path='/signup' element={<Signup/>}></Route>
        </Routes>
      </Router>
      </Notestate>
    </>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom'
// CSS
import './App.css';
//components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer';
//Pages
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path ='/'element={<Home/>}/>
      <Route path ='/login'element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/movies' element={<Movies/>}/>
      </Routes>
     <Footer/> 
    </div>
  );
}

export default App;

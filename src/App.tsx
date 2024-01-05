import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar';
import Characters from './pages/Characters';
import Details from './pages/Details';

function App() {
  
  return (
    <>
      <NavbarComponent/>
      <div>
        <Routes>
          <Route path='/' element={<Characters />}></Route>
          <Route path='/details' element={<Details/>} ></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

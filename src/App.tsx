import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar';
import Characters from './pages/Characters';

function App() {
  
  return (
    <>
      <NavbarComponent/>
      <div>
        <Routes>
          <Route path='/' element={<Characters />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

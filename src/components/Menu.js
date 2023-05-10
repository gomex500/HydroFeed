import { Route, Routes } from 'react-router-dom';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Inicio from './Inicio';
import '../css/menu.css';

function Menu() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/cvg' element={<h1>home2</h1>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default Menu;
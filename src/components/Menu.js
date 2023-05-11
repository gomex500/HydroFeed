import { Route, Routes } from 'react-router-dom';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Inicio from './Inicio';
import Beneficios from './Beneficios';
import Procesos from './Procesos';
import Ayuda from './Ayuda';
import '../css/menu.css';

function Menu() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/beneficios' element={<Beneficios/>}/>
          <Route path='/proceso' element={<Procesos/>}/>
          <Route path='/ayuda' element={<Ayuda/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default Menu;
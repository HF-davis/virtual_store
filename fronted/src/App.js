import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';

import Home from './pages/Home';
import BAlcoholicas from './pages/BAlcoholicas/BAlcoholicas';
import BNoAlcoholicas from './pages/BNoAlcoholicas/BNoAlcoholicas';
import Cigarros from './pages/Cigarros/Cigarros';
import CuidadoPersonal from './pages/CuidadoPersonal/CuidadoPersonal';
import PiqueoSnack from './pages/PickeoSnack/PiqueoSnack';
import Confiteria from './pages/Confiteria/Confiteria';
import Preservativo from './pages/Preservativos/Preservativo';
import Helados from './pages/Helados/Helados';
import Panes from './pages/Panes/Panes';
import Abarrotes from './pages/Abarrotes/Abarrotes';
import Embutidos from './pages/Embutidos/Embutidos';
import HogarLimpieza from './pages/HogarLimpieza/HogarLimpieza';
import Hielo from './pages/Hielo/Hielo';
import Mascotas from './pages/Mascotas/Mascotas';
import Electronicos from './pages/Electronicos/Electronicos';

function App() {
  return (
    <div>
      <Navbar/>

      <BrowserRouter>
               
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="BebidasAlcoholicas" element={<BAlcoholicas />} />
                    <Route path="BebidasNoAlcoholicas" element={<BNoAlcoholicas/>} />
                    <Route path="Cigarros"  element={<Cigarros />} />
                    <Route path="Helados"  element={<Helados />} />
                    <Route path="Confiteria" element={<Confiteria />} />
                    <Route path="Panes"  element={<Panes />} />
                    <Route path="Abarrotes"  element={<Abarrotes />} />
                    <Route path="Embutidos"  element={<Embutidos />} />
                    <Route path="HogarLimpieza"  element={<HogarLimpieza />} />
                    <Route path="CuidadoPersonal" element={<CuidadoPersonal />} />
                    <Route path="Hielo" element={<Hielo />} />
                    <Route path="Mascotas" element={<Mascotas />} />
                    <Route path="Electronicos" element={<Electronicos />} />
                    <Route path="PiqueoySancks" element={<PiqueoSnack />} />
                    <Route path="Preservativos" element={<Preservativo />} />
                    
                    
                    </Routes>
                </BrowserRouter>
     
      
    </div>
  );
}

export default App;
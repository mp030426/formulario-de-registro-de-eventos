import { useState } from 'react'
import './App.css'
import { FormRegistrar } from './components/formRegistrar';
import { ListarTelevisores } from './components/formListarTelevisores';
import { Menu } from './components/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route exact path="/formulario" element={ <FormRegistrar/> }/>
          <Route exact path="/listado"    element={ <ListarTelevisores/> }/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

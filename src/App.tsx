import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categorias/listarCategorias/ListarCategoria';
import CadastrarCategoria from './components/categorias/cadastrarCategoria/CadastrarCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastrar" element={<CadastrarCategoria />} />
            <Route path="/editarCategoria/:id" element={<CadastrarCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>

  );
}
export default App;
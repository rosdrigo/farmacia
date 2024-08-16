import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaCategoria from './components/categorias/listarCategorias/ListarCategoria';
import CadastrarCategoria from './components/categorias/cadastrarCategoria/CadastrarCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProduto from './components/produtos/listaProdutos/ListaProdutos';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import CadastrarProduto from './components/produtos/cadastrarProduto/CadastrarProduto';

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Navbar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/cadastrar" element={<CadastrarCategoria />} />
            <Route path="/editarCategoria/:id" element={<CadastrarCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/cadastrarProduto" element={<CadastrarProduto />} />
            <Route path="/editarProduto/:id" element={<CadastrarProduto />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}
export default App;
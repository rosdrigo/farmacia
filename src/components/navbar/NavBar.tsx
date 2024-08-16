import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
  return (
    <>
       <div className='w-full bg-purple-950 text-white flex items-center py-4'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/home' className='text-3xl font-extrabold uppercase tracking-wider hover:text-purple-300 transition-colors'>
          Farmácia
        </Link>
        <div className='flex gap-6'>
          <Link to='/home' className='text-lg font-medium hover:text-purple-300 transition-colors'>
            Home
          </Link>
          <Link to='/categorias' className='text-lg font-medium hover:text-purple-300 transition-colors'>
            Categorias
          </Link>
          <Link to='/cadastrar' className='text-lg font-medium hover:text-purple-300 transition-colors'>
            Cadastrar Categoria
          </Link>
          <Link to='/produtos' className='text-lg font-medium hover:text-purple-300 transition-colors'>
            Produtos
          </Link>
          <Link to='/cadastrarProduto' className='text-lg font-medium hover:text-purple-300 transition-colors'>
            Cadastrar produtos
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
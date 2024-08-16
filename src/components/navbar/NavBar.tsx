import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
  return (
    <>
      <div className='w-full bg-purple-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>
          <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='cadastrar' className='hover:underline'>Cadastrar Categoria</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
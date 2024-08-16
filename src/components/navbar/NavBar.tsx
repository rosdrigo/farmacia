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
            <div className='hover:underline'>Categoria</div>
            <div className='hover:underline'>Cadastrar Categoria</div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
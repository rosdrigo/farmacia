import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className='border border-gray-300 bg-white flex flex-col rounded-lg overflow-hidden shadow-md'>
      <header className='py-3 px-6 bg-purple-900 text-white font-semibold text-lg flex items-center'>
        <PencilIcon className='h-6 w-6 mr-2 text-purple-300' />
        Categoria
      </header>
      <div className='p-6 bg-gray-100'>
        <p className='text-xl text-gray-800 mb-4'>{categoria.nome}</p>
        <p className='text-lg text-gray-600'>{categoria.descricao}</p>
      </div>
      <div className="flex border-t border-gray-300">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-1/2 pr-2'>
          <button className='w-full py-2 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-md'>
            Editar
          </button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='w-1/2 pl-2'>
          <button className='w-full py-2 text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-md'>
            Deletar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria
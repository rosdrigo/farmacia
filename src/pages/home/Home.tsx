import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';



function Home() {
  return (
    <>
    <div className= "min-h-[83.7vh] bg-purple-900 flex flex-col items-center py-12">
      <div className='container mx-auto grid md:grid-cols-2 gap-8 text-white px-6'>
        <div className="flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left">
          <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
            Seja bem-vinde!
          </h2>
          <p className='text-lg md:text-xl'>
            Procure aqui a categoria dos seus medicamentos
          </p>
          <button className='bg-white text-purple-900 py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-colors'>
            Ver Categorias
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img src={homeLogo} alt="Imagem Representativa" className='w-full max-w-md' />
        </div>
      </div>
    </div>
    
  </>
  );
}

export default Home;
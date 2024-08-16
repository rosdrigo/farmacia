import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className='w-full bg-purple-950 text-white py-4'>
    <div className="container mx-auto flex flex-col items-center">
      <p className='text-xl font-bold mb-2'>Projeto Farmacia Generation | Copyright</p>
      <p className='text-lg mb-4'>Acesse nossas redes sociais</p>
      <div className='flex gap-4'>
        <LinkedinLogo size={32} weight='bold' className='hover:text-purple-300 transition-colors' />
        <InstagramLogo size={32} weight='bold' className='hover:text-purple-300 transition-colors' />
        <FacebookLogo size={32} weight='bold' className='hover:text-purple-300 transition-colors' />
      </div>
    </div>
  </footer>
  );
}

export default Footer;

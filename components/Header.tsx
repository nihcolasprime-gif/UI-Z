
import React from 'react';
import { WHATSAPP_URL } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 lg:px-24 backdrop-blur-md bg-black/50 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-white">
          UI-Z
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#solucao" className="hover:text-white transition-colors">Solução</a>
          <a href="#incluso" className="hover:text-white transition-colors">O que inclui</a>
          <a href="#preco" className="hover:text-white transition-colors">Preço</a>
        </nav>
        <div>
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-semibold bg-white text-black px-6 py-2.5 rounded-full hover:bg-zinc-200 transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

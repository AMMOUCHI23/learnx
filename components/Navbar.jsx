'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className=" mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          LearnX
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className='hidden md:flex'>
        <ul className=" flex items-center md:flex space-x-6 font-medium text-gray-700">
          <li><Link href="/" >Accueil</Link></li>
          <li><Link href="/courses">Cours</Link></li>
          <li><Link href="/tutoriels">Tutoriels</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li className="text-indigo-600 border-2 border-indigo-600 rounded-full px-4 py-2 hover:bg-indigo-600 hover:text-fuchsia-50 hover:scale-110 transition duration-700 ease-in-out"><Link href="/auth/login">Mon compte</Link></li>
        </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-lg font-medium text-gray-700">
          <li><Link href="/" onClick={toggleMenu}>Accueil</Link></li>
          <li><Link href="/courses" onClick={toggleMenu}>Cours</Link></li>
          <li><Link href="/tutoriels" onClick={toggleMenu}>Tutoriels</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link href="/auth/login" onClick={toggleMenu}>Mon compte</Link></li>


        </ul>
      )}
    </nav>
  );
};

export default Navbar;

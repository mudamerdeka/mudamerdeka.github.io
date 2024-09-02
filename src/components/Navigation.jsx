import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Navigation = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Pergerakan Muda Merdeka</Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-blue-200">{item.title}</Link>
            </li>
          ))}
          <li><a href="https://blog.mudamerdeka.or.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Blog</a></li>
          <li><a href="https://buku.mudamerdeka.or.id" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">Buku</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
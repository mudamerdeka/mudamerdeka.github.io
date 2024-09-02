import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold mb-2">Pergerakan Muda Merdeka</h3>
        <p>Email: pmmdpp@gmail.com</p>
        <div className="mt-4">
          <a href="https://blog.mudamerdeka.or.id" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 mr-4">Blog</a>
          <a href="https://buku.mudamerdeka.or.id" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">Buku</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
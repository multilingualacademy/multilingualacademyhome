import { Link } from 'react-router-dom';
import { Globe2, Book, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Globe2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Multilingual Academy</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
              <Book className="h-5 w-5 mr-1" />
              Cursos
            </Link>
            <Link to="/about" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600">
              <GraduationCap className="h-5 w-5 mr-1" />
              Nosotros
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cursos</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Nosotros</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
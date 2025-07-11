import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/imagens/logo1.png';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 5);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: 'HOME', path: '/', id: 'home' },
    { name: 'ÁREAS DE ATUAÇÃO', path: '/areas-atuacao', id: 'areas-atuacao' },
    { name: 'SOBRE NÓS', path: '/sobre-nos', id: 'sobre-nos' },
    { name: 'NOTÍCIAS', path: '/noticias', id: 'noticias' },
    { name: 'CLIENTES', path: '/clientes', id: 'clientes' },
    { name: 'OUVIDORIA', path: '/ouvidoria', id: 'ouvidoria' },
    { name: 'TRABALHE CONOSCO', path: '/trabalhe-conosco', id: 'trabalhe-conosco' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out bg-white shadow-md top-0 py-2`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo da Empresa"
              className={`h-16 md:h-20 object-contain transition-all duration-300`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.path}
                className={`px-4 py-5 font-medium uppercase text-sm ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-900 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden text-gray-900 hover:opacity-80`}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden shadow-lg bg-white`}>
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.path}
                  className={`block px-3 py-3 font-medium uppercase text-sm text-gray-900 hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : ''
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from '../../assets/imagens/logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 5);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = [
    { name: 'HOME', path: '/', id: 'home' },
    {
      name: 'O GRUPO',
      path: '/grupo',
      id: 'grupo',
      subItems: [
        { name: 'História', path: '/grupo/historia' },
        { name: 'Diretoria', path: '/grupo/diretoria' },
        { name: 'Valores', path: '/grupo/valores' },
      ],
    },
    {
      name: 'NEGÓCIOS',
      path: '/negocios',
      id: 'negocios',
      subItems: [
        { name: 'MultSEG - Segurança', path: '/negocios/seguranca' },
        { name: 'Atendimento e Sustentabilidade', path: '/negocios/sustentabilidade' },
      ],
    },
    { name: 'BLOG', path: '/blog', id: 'blog' },
    { name: 'CLIENTES', path: '/clientes', id: 'clientes' },
    { name: 'TRABALHE CONOSCO', path: '/trabalhe-conosco', id: 'trabalhe' },
    { name: 'CONTATO', path: '/contato', id: 'contato' },
    { name: 'OUVIDORIA', path: '/ouvidoria', id: 'ouvidoria' },
  ];

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

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
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white shadow-md top-0 py-2'  // Fundo branco com scroll
          : 'bg-transparent top-6 py-4'      // Transparente no topo
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo (cor original sempre) */}
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo da Empresa"
              className="h-12 md:h-16 object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                {link.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.id)}
                      className={`px-4 py-5 font-medium uppercase text-sm flex items-center ${
                        activeLink === link.id
                          ? isScrolled
                            ? 'text-gray-900'  // Preto com scroll
                            : 'text-white'     // Branco no topo
                          : isScrolled
                          ? 'text-gray-900 hover:text-gray-900'  // Preto com scroll
                          : 'text-white hover:text-white'        // Branco no topo
                      }`}
                    >
                      {link.name}
                      <FiChevronDown
                        className={`ml-1 transition-transform ${
                          openDropdown === link.id ? 'rotate-180' : ''
                        } ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                      />
                    </button>

                    {openDropdown === link.id && (
                      <div
                        className={`absolute left-0 top-full mt-0 w-56 shadow-lg rounded-b-lg z-50 ${
                          isScrolled ? 'bg-white' : 'bg-gray-800'  // Fundo branco ou cinza escuro
                        }`}
                      >
                        {link.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.path}
                            className={`block px-4 py-3 text-sm ${
                              isScrolled
                                ? 'text-gray-700 hover:bg-gray-100'  // Cinza escuro com scroll
                                : 'text-white hover:bg-gray-700'     // Branco no topo
                            } border-b border-gray-200 last:border-0`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.path}
                    className={`px-4 py-5 font-medium uppercase text-sm ${
                      activeLink === link.id
                        ? isScrolled
                          ? 'text-gray-900'  // Preto com scroll
                          : 'text-white'     // Branco no topo
                        : isScrolled
                        ? 'text-gray-900 hover:text-gray-900'  // Preto com scroll
                        : 'text-white hover:text-white'        // Branco no topo
                    }`}
                    onClick={() => setActiveLink(link.id)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden ${
              isScrolled ? 'text-gray-900' : 'text-white'
            } hover:opacity-80`}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden shadow-lg ${
            isScrolled ? 'bg-white' : 'bg-gray-800'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.id}>
                  {link.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.id)}
                        className={`w-full flex justify-between items-center px-3 py-3 font-medium uppercase text-sm ${
                          isScrolled ? 'text-gray-900' : 'text-white'
                        }`}
                      >
                        {link.name}
                        <FiChevronDown
                          className={`transition-transform ${
                            openDropdown === link.id ? 'rotate-180' : ''
                          } ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                        />
                      </button>

                      {openDropdown === link.id && (
                        <div className="pl-4">
                          {link.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.path}
                              className={`block px-3 py-2 text-sm ${
                                isScrolled
                                  ? 'text-gray-700 hover:bg-gray-100'
                                  : 'text-white hover:bg-gray-700'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.path}
                      className={`block px-3 py-3 font-medium uppercase text-sm ${
                        isScrolled ? 'text-gray-900' : 'text-white'
                      }`}
                      onClick={() => {
                        setActiveLink(link.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
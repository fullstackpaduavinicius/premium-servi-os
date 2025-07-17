import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Importação das imagens
import cliente1 from '/src/assets/imagens/cliente1.jpeg';
import cliente2 from '/src/assets/imagens/cliente2.jpeg';
import cliente3 from '/src/assets/imagens/cliente3.jpeg';
import cliente4 from '/src/assets/imagens/cliente4.jpeg';
import cliente5 from '/src/assets/imagens/cliente5.jpeg';
import cliente6 from '/src/assets/imagens/cliente6.jpeg';
//import cliente7 from '/src/assets/imagens/cliente7.jpeg';
//import cliente8 from '/src/assets/imagens/cliente8.jpeg';
import cliente9 from '/src/assets/imagens/cliente9.jpeg';
import cliente10 from '/src/assets/imagens/cliente10.jpeg';
import cliente11 from '/src/assets/imagens/cliente11.jpeg';

const Clientes = () => {
  const controls = useAnimation();
  const carouselRef = useRef();
  
  const logos = [
    { src: cliente1, alt: 'Cliente 1' },
    { src: cliente2, alt: 'Cliente 2' },
    { src: cliente3, alt: 'Cliente 3' },
    { src: cliente4, alt: 'Cliente 4' },
    { src: cliente5, alt: 'Cliente 5' },
    { src: cliente6, alt: 'Cliente 6' },
    //{ src: cliente7, alt: 'Cliente 7' },
    //{ src: cliente8, alt: 'Cliente 8' },
    { src: cliente9, alt: 'Cliente 9' },
    { src: cliente10, alt: 'Cliente 10' },
    { src: cliente11, alt: 'Cliente 11' }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const carouselWidth = carousel.scrollWidth - carousel.offsetWidth;
    
    const sequence = async () => {
      while (true) {
        await controls.start({ x: -carouselWidth }, { duration: 30, ease: "linear" });
        await controls.start({ x: 0 }, { duration: 0 });
      }
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[50vh] py-16 bg-backgroundLight"
      style={{ marginTop: '96px' }} // Adicionei esta linha - altura equivalente ao header
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-16 text-center text-primary"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Nossos <span className="text-secondary">Clientes</span>
        </motion.h1>

        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-backgroundLight to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-backgroundLight to-transparent z-10" />

          <motion.div
            ref={carouselRef}
            className="flex py-8"
            animate={controls}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={`${logo.alt}-${index}`}
                className="flex-shrink-0 px-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center h-32 w-48">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-20 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p 
          className="text-center text-secondary mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Empresas que confiam em nossos serviços e nos permitem fazer parte de seus sucessos
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Clientes;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import banner1 from '../../assets/imagens/banner1.png';
import banner2 from '../../assets/imagens/banner2.jpeg';
import banner3 from '../../assets/imagens/banner3.png';
import banner4 from '../../assets/imagens/banner4.jpg';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const banners = [banner1, banner2, banner3, banner4];

  const slideContent = [
    {
      title: "Excelência em Terceirização",
      subtitle: "Soluções profissionais em limpeza, conservação e mão de obra.",
      cta: "Solicite uma proposta"
    },
    {
      title: "Construção Civil com Qualidade",
      subtitle: "Infraestrutura, elétrica e hidráulica para obras completas.",
      cta: "Conheça nossos projetos"
    },
    {
      title: "Gestão Ambiental Responsável",
      subtitle: "Coleta e gerenciamento de resíduos conforme normas ambientais.",
      cta: "Saiba mais"
    },
    {
      title: "Mais de 15 Anos de Experiência",
      subtitle: "Confiança e profissionalismo a serviço de empresas públicas e privadas.",
      cta: "Fale com nossa equipe"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            <img 
              src={banners[currentIndex]} 
              alt={`Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Texto com cor branca total */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 text-white">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                    {slideContent[currentIndex].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-white">
                    {slideContent[currentIndex].subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                  >
                    {slideContent[currentIndex].cta}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de navegação */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
        aria-label="Slide anterior"
      >
        <FiChevronLeft size={32} />
      </button>

      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
        aria-label="Próximo slide"
      >
        <FiChevronRight size={32} />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 'right' : 'left');
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-primary w-6' : 'bg-white bg-opacity-50'}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

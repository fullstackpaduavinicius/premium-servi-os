import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import banner1 from '../../assets/imagens/banner1.png';
import banner2 from '../../assets/imagens/banner2.jpeg';
import banner3 from '../../assets/imagens/banner3.png';
import banner4 from '../../assets/imagens/banner4.jpg';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const banners = [banner1, banner2, banner3, banner4];

  const slideContent = [
    {
      title: "Excelência em Terceirização",
      subtitle: "Soluções profissionais em limpeza, conservação e mão de obra.",
      cta: "Saiba mais"
    },
    {
      title: "Construção Civil com Qualidade",
      subtitle: "Infraestrutura, elétrica e hidráulica para obras completas.",
      cta: "Saiba mais"
    },
    {
      title: "Gestão Ambiental Responsável",
      subtitle: "Coleta e gerenciamento de resíduos conforme normas ambientais.",
      cta: "Saiba mais"
    },
    {
      title: "Mais de 15 Anos de Experiência",
      subtitle: "Confiança e profissionalismo a serviço de empresas públicas e privadas.",
      cta: "Saiba mais"
    }
  ];

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  }, [isAnimating, banners.length]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  }, [isAnimating, banners.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute'
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative'
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      position: 'absolute'
    })
  };

  const handleAnimationComplete = () => setIsAnimating(false);

  return (
    <section className="relative h-[calc(100vh-80px)] lg:h-[calc(100vh-104px)] mt-[80px] lg:mt-[104px] overflow-hidden">
      <div className="relative w-full h-full">
        <AnimatePresence
          custom={direction}
          initial={false}
          onExitComplete={handleAnimationComplete}
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 400, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="relative w-full h-full"
          >
            <img
              src={banners[currentIndex]}
              alt={`Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="max-w-[90%] sm:max-w-xl"
                >
                  <h1 
                    className="text-white text-lg sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
                    style={{
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {slideContent[currentIndex].title}
                  </h1>
                  <p 
                    className="text-white text-xs sm:text-lg md:text-2xl mb-4 sm:mb-6 md:mb-8"
                    style={{
                      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), -1px -1px 3px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {slideContent[currentIndex].subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary-dark text-white px-3 py-1 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-colors text-xs sm:text-base md:text-lg"
                    style={{
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {slideContent[currentIndex].cta}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={goToPrev}
        disabled={isAnimating}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
        aria-label="Slide anterior"
      >
        <FiChevronLeft className="text-xl sm:text-2xl" />
      </button>

      <button
        onClick={goToNext}
        disabled={isAnimating}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
        aria-label="Próximo slide"
      >
        <FiChevronRight className="text-xl sm:text-2xl" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            disabled={isAnimating}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-4 sm:w-6' : 'bg-white bg-opacity-50'
            } ${isAnimating ? 'opacity-50' : ''}`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
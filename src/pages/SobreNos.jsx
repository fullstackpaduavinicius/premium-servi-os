import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiShield, FiAward, FiGlobe } from 'react-icons/fi';
import ReactParallaxTilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import { Tooltip } from 'react-tooltip';

const SobreNos = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const highlightCards = [
    {
      title: 'Excelência Operacional',
      description: 'Entregamos resultados com alto padrão de qualidade e compromisso.',
      icon: <FiAward className="text-4xl" />
    },
    {
      title: 'Atuação Estratégica',
      description: 'Soluções pensadas para o seu segmento, com equipes capacitadas.',
      icon: <FiCheckCircle className="text-4xl" />
    },
    {
      title: 'Compromisso Sustentável',
      description: 'A sustentabilidade faz parte dos nossos processos e decisões.',
      icon: <FiGlobe className="text-4xl" />
    },
  ];

  const services = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Terceirização de Mão de Obra",
      description: "Profissionais qualificados para atividades operacionais e administrativas.",
      delay: 0.1,
      tooltip: "Reduza custos com nossa equipe especializada"
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: "Limpeza e Conservação",
      description: "Equipes treinadas e supervisionadas para serviços de excelência.",
      delay: 0.2,
      tooltip: "Ambientes impecáveis com padrões hospitalares"
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Gestão de Resíduos",
      description: "Coleta e gerenciamento alinhados às normas ambientais.",
      delay: 0.3,
      tooltip: "Soluções ecológicas e sustentáveis"
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Construção Civil",
      description: "Obras completas de infraestrutura, elétrica e hidráulica.",
      delay: 0.4,
      tooltip: "Execução com segurança e qualidade"
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 bg-gradient-to-b from-backgroundLight/20 to-white"
    >
      {/* Hero Section - Espaçamento aumentado */}
      <motion.section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-32" /* Aumentei h-[60vh] para h-[70vh] e mb-24 para mb-32 */
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-primary/10 z-0" />
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8"> {/* Aumentei mb-6 para mb-8 */}
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Premium Serviços
            </motion.span>
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Excelência em serviços essenciais há mais de 17 anos
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative space-y-40" /* Adicionei space-y-40 para espaçamento entre seções */
      >
        {/* Highlight Cards - Espaçamento aumentado */}
        <motion.div 
          className="container mx-auto px-4"
          variants={fadeIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-primary mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Nossos <span className="text-secondary">Pilares</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Aumentei gap-8 para gap-10 */}
            {highlightCards.map((card, index) => (
              <ReactParallaxTilt
                key={index}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                className="tilt-element"
              >
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100"
                  whileHover={{ y: -10 }}
                  variants={fadeIn}
                >
                  <div className="bg-primary/10 h-64 flex items-center justify-center"> {/* Aumentei h-48 para h-64 */}
                    <motion.div
                      className="text-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      {card.icon}
                    </motion.div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col"> {/* Aumentei p-8 para p-10 */}
                    <div className="flex-1 space-y-6"> {/* Adicionei space-y-6 */}
                      <h3 className="text-2xl font-bold text-secondary">{card.title}</h3>
                      <p className="text-secondary">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              </ReactParallaxTilt>
            ))}
          </div>
        </motion.div>

        {/* About Company - Espaçamento aumentado */}
        <motion.div 
          className="container mx-auto px-4"
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20"> {/* Aumentei gap-16 para gap-20 */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute -inset-6 bg-primary/10 rounded-3xl -z-10" /> {/* Aumentei inset-4 para inset-6 */}
              <div className="bg-gradient-to-br from-primary/5 to-backgroundLight/30 rounded-2xl shadow-lg w-full h-[32rem] flex items-center justify-center p-10 border border-gray-200"> {/* Aumentei h-96 para h-[32rem] e p-8 para p-10 */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-5xl font-bold text-primary mb-6"> {/* Aumentei mb-4 para mb-6 */}
                    2005
                  </div>
                  <p className="text-secondary text-2xl"> {/* Aumentei text-xl para text-2xl */}
                    Ano de fundação
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="flex flex-col justify-center space-y-8"> {/* Adicionei space-y-8 */}
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-primary" /* Aumentei tamanho da fonte */
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Nossa <span className="text-secondary">História</span>
              </motion.h2>
              
              <motion.div className="space-y-8"> {/* Adicionei space-y-8 */}
                <motion.p 
                  className="text-xl text-secondary leading-relaxed" /* Aumentei text-lg para text-xl */
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Fundada em <strong className="text-primary">2005</strong>, a <strong>Premium Serviços</strong> surgiu com o propósito de revolucionar o mercado de serviços essenciais, trazendo profissionalismo, qualidade e inovação para um setor que carecia de padrões elevados.
                </motion.p>
                
                <motion.p 
                  className="text-xl text-secondary leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Ao longo de <strong className="text-primary">17 anos</strong>, consolidamos nossa marca através de um atendimento personalizado, equipes altamente capacitadas e um compromisso inabalável com a satisfação total dos nossos clientes.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services - Espaçamento aumentado */}
        <motion.div 
          className="container mx-auto px-4"
          variants={fadeIn}
        >
          <div className="text-center mb-20"> {/* Aumentei mb-16 para mb-20 */}
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary mb-8" /* Aumentei tamanho e mb-6 para mb-8 */
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Nossos <span className="text-secondary">Serviços</span>
            </motion.h2>
            <motion.p 
              className="text-2xl text-secondary max-w-3xl mx-auto mb-16" /* Aumentei text-xl para text-2xl e mb-12 para mb-16 */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Soluções completas para suas necessidades operacionais
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Aumentei gap-8 para gap-10 */}
            <AnimatePresence>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  data-tooltip-id={`service-tooltip-${index}`}
                  data-tooltip-content={service.tooltip}
                >
                  <div className="p-10"> {/* Aumentei p-8 para p-10 */}
                    <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary"> {/* Aumentei mb-6 para mb-8 */}
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-6 group-hover:text-primary transition-colors duration-300"> {/* Aumentei text-xl para text-2xl e mb-4 para mb-6 */}
                      {service.title}
                    </h3>
                    <p className="text-lg text-secondary"> {/* Aumentei text-base para text-lg */}
                      {service.description}
                    </p>
                  </div>
                  <Tooltip id={`service-tooltip-${index}`} place="top" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Diferenciais - Espaçamento aumentado */}
        <motion.div 
          className="container mx-auto px-4 pb-40" /* Aumentei pb-32 para pb-40 */
          variants={fadeIn}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-16"> {/* Aumentei p-12 para p-16 */}
            <div className="text-center mb-20"> {/* Aumentei mb-16 para mb-20 */}
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-primary mb-8" /* Aumentei tamanho e mb-6 para mb-8 */
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                O Que Nos <span className="text-secondary">Diferencia</span>
              </motion.h2>
              <motion.p 
                className="text-2xl text-secondary max-w-3xl mx-auto" /* Aumentei text-xl para text-2xl */
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Excelência em cada detalhe do nosso trabalho
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Aumentei gap-8 para gap-12 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center" /* Aumentei p-8 para p-10 */
              >
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"> {/* Aumentei w-20/h-20 para w-24/h-24 e mb-6 para mb-8 */}
                  <FiAward className="text-5xl text-primary" /> {/* Aumentei text-4xl para text-5xl */}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-6"> {/* Aumentei mb-4 para mb-6 */}
                  Qualidade Certificada
                </h3>
                <p className="text-lg text-secondary"> {/* Aumentei text-base para text-lg */}
                  Sistemas de qualidade auditados regularmente com certificações internacionais que garantem excelência em todos os serviços.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <FiShield className="text-5xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Segurança Total
                </h3>
                <p className="text-lg text-secondary">
                  Protocolos rigorosos de segurança do trabalho, com treinamentos constantes e equipamentos de última geração.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <FiGlobe className="text-5xl text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  Sustentabilidade
                </h3>
                <p className="text-lg text-secondary">
                  Práticas ecoeficientes em todos os processos, com gestão inteligente de recursos e produtos biodegradáveis.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default SobreNos;
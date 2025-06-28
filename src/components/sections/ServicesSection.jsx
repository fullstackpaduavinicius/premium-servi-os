import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHardHat, FaBroom, FaRecycle, FaBuilding } from 'react-icons/fa';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: <FaHardHat className="text-4xl text-primary" />,
      title: "Terceirização de Mão de Obra",
      description: "Soluções completas em portaria, recepção, apoio administrativo e logística para sua empresa."
    },
    {
      icon: <FaBroom className="text-4xl text-primary" />,
      title: "Limpeza e Conservação",
      description: "Serviços especializados para empresas, órgãos públicos, escolas e condomínios residenciais."
    },
    {
      icon: <FaRecycle className="text-4xl text-primary" />,
      title: "Gestão de Resíduos",
      description: "Soluções sustentáveis com foco na conformidade ambiental e otimização de processos."
    },
    {
      icon: <FaBuilding className="text-4xl text-primary" />,
      title: "Construção Civil",
      description: "Reformas, manutenção predial e pequenas obras com qualidade e prazo garantido."
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para atender sua empresa com eficiência e segurança.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-backgroundLight rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-hover transition-colors duration-300"
          >
            Solicite um orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
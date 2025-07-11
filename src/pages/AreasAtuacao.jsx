import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiUsers, 
  FiShield, 
  FiAward, 
  FiGlobe, 
  FiBriefcase, 
  FiHome, 
  FiFileText,
  FiTruck
} from 'react-icons/fi';

const AreasAtuacao = () => {
  // Áreas de atuação com dados completos
  const servicos = [
    {
      icone: <FiHome className="text-4xl text-primary" />,
      titulo: "Limpeza e Conservação Predial",
      descricao: "Serviços especializados para ambientes corporativos e residenciais.",
      destaques: [
        "Limpeza profissional diária",
        "Tratamento de superfícies",
        "Produtos ecológicos"
      ]
    },
    {
      icone: <FiFileText className="text-4xl text-primary" />,
      titulo: "Limpeza Hospitalar",
      descricao: "Padrões rigorosos para ambientes de saúde.",
      destaques: [
        "Controle de infecção",
        "Equipamentos hospitalares",
        "Protocolos sanitários"
      ]
    },
    {
      icone: <FiUsers className="text-4xl text-primary" />,
      titulo: "Terceirização de Serviços",
      descricao: "Mão de obra qualificada para diversas necessidades.",
      destaques: [
        "Profissionais treinados",
        "Gestão dedicada",
        "Soluções customizadas"
      ]
    },
    {
      icone: <FiBriefcase className="text-4xl text-primary" />,
      titulo: "Gestão de Resíduos",
      descricao: "Soluções sustentáveis para descarte consciente.",
      destaques: [
        "Coleta seletiva",
        "Documentação ambiental",
        "Destinação correta"
      ]
    },
    {
      icone: <FiShield className="text-4xl text-primary" />,
      titulo: "Construção Civil",
      descricao: "Obras com excelência e segurança.",
      destaques: [
        "Infraestrutura completa",
        "Gerenciamento de projetos",
        "Cumprimento de prazos"
      ]
    },
    {
      icone: <FiTruck className="text-4xl text-primary" />,
      titulo: "Locação de Equipamentos",
      descricao: "Frota moderna para suas operações.",
      destaques: [
        "Manutenção preventiva",
        "Equipamentos certificados",
        "Suporte 24/7"
      ]
    }
  ];

  // Configurações de animação
  const animacaoContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25
      }
    }
  };

  const animacaoItem = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={animacaoContainer}
      className="pt-28 pb-20 bg-gray-50"
      id="areas-atuacao"
    >
      <div className="container mx-auto px-5 max-w-7xl">
        {/* Seção Título */}
        <motion.header 
          variants={animacaoItem}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Nossas <span className="text-primary">Áreas de Atuação</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas e personalizadas para atender às necessidades do seu negócio.
          </p>
        </motion.header>

        {/* Grid de Serviços */}
        <motion.section 
          variants={animacaoContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicos.map((servico, index) => (
            <motion.article
              key={index}
              variants={animacaoItem}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="bg-primary bg-opacity-10 p-5 rounded-full mb-6">
                  {servico.icone}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{servico.titulo}</h2>
                <p className="text-gray-600 mb-6 flex-grow">{servico.descricao}</p>
                
                <ul className="space-y-3 text-left w-full">
                  {servico.destaques.map((destaque, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{destaque}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </div>
    </motion.main>
  );
};

export default AreasAtuacao;
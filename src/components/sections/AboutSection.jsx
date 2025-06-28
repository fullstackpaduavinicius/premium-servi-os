import { FiCheckCircle, FiUsers, FiShield, FiAward, FiGlobe } from 'react-icons/fi';

const AboutSection = () => {
  const highlightCards = [
    {
      image: 'src/assets/imagens/card3.png',
      title: 'Excelência Operacional',
      description: 'Entregamos resultados com alto padrão de qualidade e compromisso.',
    },
    {
      image: 'src/assets/imagens/card2.png',
      title: 'Atuação Estratégica',
      description: 'Soluções pensadas para o seu segmento, com equipes capacitadas.',
    },
    {
      image: 'src/assets/imagens/card1.png',
      title: 'Compromisso Sustentável',
      description: 'A sustentabilidade faz parte dos nossos processos e decisões.',
    },
  ];

  const services = [
    {
      icon: <FiUsers className="text-3xl text-primary" />,
      title: "Terceirização de Mão de Obra",
      description: "Profissionais qualificados para atividades operacionais e administrativas.",
    },
    {
      icon: <FiCheckCircle className="text-3xl text-primary" />,
      title: "Limpeza e Conservação",
      description: "Equipes treinadas e supervisionadas para serviços de excelência.",
    },
    {
      icon: <FiGlobe className="text-3xl text-primary" />,
      title: "Gestão de Resíduos",
      description: "Coleta e gerenciamento alinhados às normas ambientais.",
    },
    {
      icon: <FiShield className="text-3xl text-primary" />,
      title: "Construção Civil",
      description: "Obras completas de infraestrutura, elétrica e hidráulica.",
    },
  ];

  const stats = [
    { value: "100+", label: "Clientes Atendidos" },
    { value: "500+", label: "Profissionais" },
    { value: "15+", label: "Anos de Experiência" },
    { value: "24/7", label: "Disponibilidade" },
  ];

  return (
    <section className="py-20 section-alt" id="sobre">
      <div className="container mx-auto px-4">

        {/* 🔥 Destaques com imagem no topo */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlightCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{card.title}</h3>
                  <p className="text-secondary text-sm">{card.description}</p>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-primary font-semibold hover:underline text-sm"
                  >
                    Saiba mais +
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conteúdo textual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre a <span className="text-secondary">Premium Empreendimentos</span>
            </h2>
            <p className="text-lg text-secondary mb-6">
              A <strong>Premium Empreendimentos</strong> é especializada em terceirização de mão de obra, 
              oferecendo soluções completas em <strong>limpeza</strong>, <strong>conservação</strong>, 
              <strong>coleta de resíduos</strong> e <strong>construção civil</strong>.
            </p>
            <p className="text-lg text-secondary mb-8">
              Atuamos com excelência em ambientes corporativos, industriais e públicos, com foco em qualidade, eficiência e sustentabilidade.
            </p>
            <a href="/about" className="btn-primary px-8 py-3 rounded-lg font-semibold inline-block">
              Saiba Mais Sobre Nós
            </a>
          </div>

          {/* Blocos de serviços */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                    <p className="text-secondary">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-20 bg-primary text-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-secondary mb-12">
            Nossos <span className="text-primary">Diferenciais</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <FiAward className="text-4xl text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Qualidade Garantida</h4>
              <p className="text-secondary">
                Padrões rigorosos de qualidade em todos os serviços prestados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <FiShield className="text-4xl text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Segurança</h4>
              <p className="text-secondary">
                Protocolos de segurança para proteger colaboradores e clientes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <FiGlobe className="text-4xl text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Sustentabilidade</h4>
              <p className="text-secondary">
                Práticas ecoeficientes em todos os nossos processos.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

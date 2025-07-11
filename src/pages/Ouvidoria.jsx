import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Ouvidoria = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-96px)] py-16 bg-backgroundLight"
      style={{ marginTop: '96px' }}
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold mb-4 text-primary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ouvidoria
          </motion.h1>
          <motion.p
            className="text-lg text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Seu canal direto para críticas, elogios, sugestões e reclamações. Estamos aqui para ouvir e melhorar nossos serviços.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Envie sua mensagem</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Obrigado por seu contato! Retornaremos em breve.
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-secondary mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-secondary mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="assunto" className="block text-sm font-medium text-secondary mb-1">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="elogio">Elogio</option>
                  <option value="duvida">Dúvida</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-sm font-medium text-secondary mb-1">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 w-full py-3 px-6 rounded-md font-medium"
              >
                <FiSend /> Enviar Mensagem
              </button>
            </form>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary bg-opacity-10 rounded-full text-primary">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-secondary">Telefone</h3>
                  <p className="text-gray-600">(79) 3027-0444</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary bg-opacity-10 rounded-full text-primary">
                  <FiMail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-secondary">E-mail</h3>
                  <p className="text-gray-600">contato@premiumemp.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary bg-opacity-10 rounded-full text-primary">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-secondary">Endereço</h3>
                  <p className="text-gray-600">R. Queiroz, 48 - Cidade Nova</p>
                  <p className="text-gray-600">Lagarto/SE - CEP: 49.400-000</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-secondary mb-4">Sobre a Premium Serviços</h3>
              <p className="text-gray-600 mb-4">
                Soluções completas em terceirização de mão de obra, limpeza, conservação, gestão de resíduos e construção civil.
              </p>
              <p className="text-gray-600">
                <strong>CNPJ:</strong> 04.952.601/0001-55
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Ouvidoria;
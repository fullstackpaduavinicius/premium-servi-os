import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiUser, FiMail, FiPhone, FiSend } from 'react-icons/fi';

const TrabalheConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    arquivo: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append('nome', formData.nome);
      form.append('email', formData.email);
      form.append('telefone', formData.telefone);
      form.append('mensagem', formData.mensagem);
      if (formData.arquivo) {
        form.append('arquivo', formData.arquivo);
      }

      // Simulação de envio
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        arquivo: null
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro no envio:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-6rem)] bg-gray-50 pt-28 pb-12"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-primary p-6 text-white">
            <h1 className="text-3xl font-bold text-white drop-shadow-md">Trabalhe Conosco</h1>
            <p className="mt-2">Envie seu currículo e faça parte do nosso time!</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                Currículo enviado com sucesso! Entraremos em contato em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                Ocorreu um erro ao enviar. Por favor, tente novamente ou envie diretamente para: contato@premiumemp.com.br
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Campo Nome */}
              <div className="space-y-1">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome Completo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              {/* Campo Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              {/* Campo Telefone */}
              <div className="space-y-1">
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                  Telefone *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              {/* Campo Arquivo */}
              <div className="space-y-1">
                <label htmlFor="arquivo" className="block text-sm font-medium text-gray-700">
                  Currículo (PDF ou DOC) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiFileText className="text-gray-400" />
                  </div>
                  <input
                    type="file"
                    id="arquivo"
                    name="arquivo"
                    onChange={handleChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                  />
                </div>
              </div>
            </div>

            {/* Campo Mensagem */}
            <div className="mt-6 space-y-1">
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                Mensagem (opcional)
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Conte-nos um pouco sobre você e suas experiências..."
              />
            </div>

            {/* Botão de Envio */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Enviar Currículo
                  </>
                )}
              </button>
            </div>

            {/* Alternativa de envio direto por email */}
            <div className="mt-6 text-sm text-gray-500">
              <p>Preferir enviar diretamente por email?</p>
              <a
                href="mailto:contato@premiumemp.com.br?subject=Candidatura - Seu Nome&body=Olá, gostaria de me candidatar a uma vaga em sua empresa. Segue em anexo meu currículo."
                className="text-primary hover:underline"
              >
                contato@premiumemp.com.br
              </a>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default TrabalheConosco;

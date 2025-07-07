import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Sobre a Empresa */}
        <div>
          <h4 className="text-lg font-bold uppercase text-white mb-4">PREMIUM SERVIÇOS</h4>
          <p className="text-sm text-gray-300 mb-2">
            Soluções completas em terceirização de mão de obra, limpeza, conservação, gestão de resíduos e construção civil.
          </p>
          <p className="text-xs text-gray-400">
            CNPJ: 04.952.601/0001-55
          </p>
        </div>

        {/* Links Úteis */}
        <div>
          <h4 className="text-lg font-bold uppercase text-white mb-4">LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="/areas-atuacao" className="hover:underline text-gray-300">Áreas de Atuação</a></li>
            <li><a href="/sobre-nos" className="hover:underline text-gray-300">Sobre Nós</a></li>
            <li><a href="/noticias" className="hover:underline text-gray-300">Notícias</a></li>
            <li><a href="/clientes" className="hover:underline text-gray-300">Clientes</a></li>
            <li><a href="/ouvidoria" className="hover:underline text-gray-300">Ouvidoria</a></li>
            <li><a href="/trabalhe-conosco" className="hover:underline text-gray-300">Trabalhe Conosco</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-lg font-bold uppercase text-white mb-4">CONTATO</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FiPhone /> (79) 3027-0444
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> contato@premiumemp.com.br
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1" />
              <span>
                R. Queiroz, 48 - Cidade Nova<br />
                Lagarto/SE - CEP: 49.400-000
              </span>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h4 className="text-lg font-bold uppercase text-white mb-4">SIGA-NOS</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary text-white"><FiFacebook size={20} /></a>
            <a href="#" className="hover:text-primary text-white"><FiInstagram size={20} /></a>
            <a href="#" className="hover:text-primary text-white"><FiLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Premium Serviços. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
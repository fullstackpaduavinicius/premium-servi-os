import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Sobre a Empresa */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Premium Serviços</h4>
          <p className="text-sm text-gray-300">
            Soluções completas em terceirização de mão de obra, limpeza, conservação, gestão de resíduos e construção civil.
          </p>
        </div>

        {/* Links Úteis */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="/grupo" className="hover:underline text-gray-300">O Grupo</a></li>
            <li><a href="/negocios" className="hover:underline text-gray-300">Negócios</a></li>
            <li><a href="/contato" className="hover:underline text-gray-300">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FiPhone /> (79) 99999-9999
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> contato@premiumservicos.com.br
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> Aracaju - SE, Brasil
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary"><FiFacebook size={20} /></a>
            <a href="#" className="hover:text-primary"><FiInstagram size={20} /></a>
            <a href="#" className="hover:text-primary"><FiLinkedin size={20} /></a>
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

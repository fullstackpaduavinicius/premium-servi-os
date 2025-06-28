const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Meu Site Institucional</h3>
            <p className="text-highlight">
              Soluções profissionais para sua empresa.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <address className="not-italic text-highlight">
              <p>Email: contato@meusite.com</p>
              <p>Telefone: (11) 1234-5678</p>
              <p>Endereço: Rua Exemplo, 123 - São Paulo/SP</p>
            </address>
          </div>
        </div>
        <div className="border-t border-highlight mt-8 pt-6 text-center text-highlight">
          <p>&copy; {new Date().getFullYear()} Meu Site Institucional. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
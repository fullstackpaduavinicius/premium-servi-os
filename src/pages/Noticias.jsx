import { motion } from 'framer-motion'

const Noticias = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24"
    >
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Notícias</h1>
        {/* Conteúdo da página aqui */}
      </div>
    </motion.div>
  )
}

export default Noticias
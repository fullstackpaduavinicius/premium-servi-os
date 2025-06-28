import React from 'react'
import { motion } from 'framer-motion'

const ContactBanner = () => {
  return (
    <motion.section 
      className="py-16 bg-primary text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Pronto para transformar seu negócio?</h2>
        <p className="text-xl mb-8">Entre em contato conosco hoje mesmo</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          Fale Conosco
        </motion.button>
      </div>
    </motion.section>
  )
}

// Exportação padrão obrigatória
export default ContactBanner
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import ServicesSection from '../components/sections/ServicesSection'

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div ref={ref}>
      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-alt"
      >
        <AboutSection />
      </motion.div>
      
      <ServicesSection />
    </div>
  )
}

export default Home

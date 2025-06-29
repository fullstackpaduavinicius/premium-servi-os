import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FloatingButton = styled(motion.a)`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 48px;
  height: 48px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 9999;
  text-decoration: none;

  &:hover {
    background-color: #1ebe57;
  }

  @media (max-width: 640px) {
    bottom: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
  }
`;

const Icon = styled(FaWhatsapp)`
  font-size: 1.25rem;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const WhatsappFloatingButton = () => {
  const whatsappNumber = '5591999999999'; // substitua pelo número real
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <FloatingButton
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon />
    </FloatingButton>
  );
};

export default WhatsappFloatingButton;

import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

const RECIPIENT_EMAIL = 'anateichmann@gmail.com';

/**
 * Envia um email através do EmailJS
 * @param {Object} formData - Dados do formulário de contato
 * @param {string} formData.name - Nome do remetente
 * @param {string} formData.email - Email do remetente
 * @param {string} formData.message - Mensagem do remetente
 * @returns {Promise<void>}
 * @throws {Error} Se houver erro ao enviar o email
 */
export const sendEmail = async (formData) => {
  const { serviceID, templateID, publicKey } = EMAIL_CONFIG;

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: RECIPIENT_EMAIL,
    subject: `Contato do Portfólio - ${formData.name}`,
  };

  await emailjs.send(serviceID, templateID, templateParams, publicKey);
};

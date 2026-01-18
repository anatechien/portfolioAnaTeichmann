import React, { useState } from 'react';
import '../../App.css';
import { EXTERNAL_LINKS } from '../../constants/theme';
import { CONTACT_MESSAGES } from '../../constants/messages';
import { sendEmail } from '../../utils/emailService';
import githubPixel from '../../assets/githubPixel.png';
import linkedinpixel from '../../assets/linkedinpixel.png';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
};

/**
 * Componente da tela de contato
 * Exibe um formulário para envio de mensagens via EmailJS
 */

function ContatoScreen() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (statusMessage) {
      setStatusMessage('');
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    try {
      await sendEmail(formData);
      setStatusMessage(CONTACT_MESSAGES.SUCCESS);
      resetForm();
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatusMessage(CONTACT_MESSAGES.ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const isSuccessMessage = statusMessage.includes('sucesso');

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">{CONTACT_MESSAGES.TITLE}</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label>Nome:</label>
            <input 
              type="text" 
              name="name"
              placeholder="Seu nome" 
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="contact-field">
            <label>Email:</label>
            <input 
              type="email" 
              name="email"
              placeholder="Seu e-mail" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="contact-field">
            <label>Mensagem:</label>
            <textarea 
              name="message"
              placeholder="Sua mensagem" 
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button 
            type="submit" 
            className="contact-submit"
            disabled={isLoading}
          >
            {isLoading ? CONTACT_MESSAGES.SENDING : CONTACT_MESSAGES.SEND}
          </button>
          
          {statusMessage && (
            <div className={`contact-status ${isSuccessMessage ? 'success' : 'error'}`}>
              {statusMessage}
            </div>
          )}
        </form>

        <div className="contact-socials">
          <a
            href={EXTERNAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <img src={githubPixel} alt="GitHub" />
          </a>
          <a
            href={EXTERNAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
          >
            <img src={linkedinpixel} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContatoScreen;

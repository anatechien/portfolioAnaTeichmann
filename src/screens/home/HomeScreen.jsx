import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { ROUTES } from '../../constants/routes';
import { HOME_MESSAGES } from '../../constants/messages';
import fotoAna from '../../assets/avatarAna.png';

const CTA_ARROW = '>';

/**
 * Componente da tela inicial (Home)
 * Exibe apresentação pessoal e call-to-action
 */

function HomeScreen() {
  return (
    <div className="home-container">
      <div className="text-content">
        <h1 className="main-title">
          {HOME_MESSAGES.GREETING} <br />
          {HOME_MESSAGES.NAME}
        </h1>
        <p className="subtitle">{HOME_MESSAGES.SUBTITLE}</p>
        <Link to={ROUTES.sobre} className="cta-section" style={{ textDecoration: 'none' }}>
          <p className="cta-text">{HOME_MESSAGES.CTA}</p>
          <div className="cta-arrow">{CTA_ARROW}</div>
        </Link>
      </div>

      <div className="image-container">
        <div className="image-background" />
        <img 
          className="fotoAna" 
          src={fotoAna} 
          alt="Ana Teichmann" 
        />
      </div>
    </div>
  );
}

export default HomeScreen;

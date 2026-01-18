import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { ROUTES } from '../../constants/routes';
import fotoAna from "../../assets/avatarAna.png";

function HomeScreen() {
  return (
    <>
      {/* Left Side - Text Content */}
      <div className="text-content">
        <h1 className="main-title">
          OLÁ, <br />
          EU SOU A ANA :p
        </h1>
        <p className="subtitle">Estudante de sistemas de informação na UFSC</p>
        <Link to={ROUTES.sobre} className="cta-section" style={{ textDecoration: 'none' }}>
          <p className="cta-text">Quer saber mais?</p>
          <div className="cta-arrow">{'>'}</div>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="image-container">
        <div className="image-background" />
        <img 
          className="fotoAna" 
          src={fotoAna} 
          alt="Ana Teichmann" 
        />
      </div>
    </>
  );
}

export default HomeScreen;

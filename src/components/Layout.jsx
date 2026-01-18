import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { ROUTES } from '../constants/routes';
import logoGatinho from '../assets/logoGatinho.png';

function Layout({ children }) {
  return (
    <div className="app-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="header-background" />
        <Link to={ROUTES.home} className="header-logo-link">
          <img className="header-logo" src={logoGatinho} alt="Ana Teichmann" />
        </Link>
        <Link to={ROUTES.home} className="header-name-link">
          <div className="header-name">Ana Teichmann</div>
        </Link>
        <nav className="header-nav">
          <Link to={ROUTES.sobre} className="nav-link">Sobre</Link>
          <Link to={ROUTES.projetos} className="nav-link">Projetos</Link>
          <Link to={ROUTES.experiencia} className="nav-link">Experiências</Link>
          <Link to={ROUTES.contato} className="nav-link">Contato</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;

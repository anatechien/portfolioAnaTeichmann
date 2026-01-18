import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { ROUTES } from '../constants/routes';
import logoGatinho from '../assets/logoGatinho.png';

const NAVIGATION_ITEMS = [
  { path: ROUTES.sobre, label: 'Sobre' },
  { path: ROUTES.projetos, label: 'Projetos' },
  { path: ROUTES.experiencia, label: 'Experiências' },
  { path: ROUTES.contato, label: 'Contato' },
];

const AUTHOR_NAME = 'Ana Teichmann';

function Layout({ children }) {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-background" />
        <Link to={ROUTES.home} className="header-logo-link">
          <img className="header-logo" src={logoGatinho} alt={AUTHOR_NAME} />
        </Link>
        <Link to={ROUTES.home} className="header-name-link">
          <div className="header-name">{AUTHOR_NAME}</div>
        </Link>
        <nav className="header-nav">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.path} to={item.path} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;

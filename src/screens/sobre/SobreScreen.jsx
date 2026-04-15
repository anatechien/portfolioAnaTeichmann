import React from 'react';
import '../../App.css';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { CONTAINER_STYLES } from '../../constants/theme';

function SobreScreen() {
  useScrollToTop();

  const cardBaseStyle = {
    background: '#1E1E1E',
    borderRadius: 46,
    border: '2px solid white',
    color: 'white',
  };

  return (
    <div className="page-container" style={{ ...CONTAINER_STYLES.page, background: '#1E1E1E' }}>
      <div className="sobre-figma-wrapper">
        <div className="sobre-figma-grid">
          <section className="sobre-figma-card sobre-figma-card--large" style={cardBaseStyle}>
            <div className="sobre-figma-card__header">
              <div className="sobre-figma-avatar" aria-hidden="true" />
              <div className="sobre-figma-identity">
                <div className="sobre-figma-identity__name">Ana Teichmann</div>
                <div className="sobre-figma-identity__age">21 anos</div>
              </div>
            </div>

            <div className="sobre-figma-divider" />

            <div className="sobre-figma-card__body">
              <p className="sobre-figma-text">
                <strong>Status:</strong> Atualmente explorando diferentes áreas de tecnologia, para descobrir onde suas
                habilidades causam mais impacto.
              </p>

              <div className="sobre-figma-divider sobre-figma-divider--between" />

              <p className="sobre-figma-text">
                <strong>Descrição:</strong> Sou bastante curiosa e em constante evolução, sempre em busca de novos
                conhecimentos para subir de nível.
              </p>
            </div>
          </section>

          <div className="sobre-figma-right-column">
            <section className="sobre-figma-card" style={cardBaseStyle}>
              <div className="sobre-figma-card__title">Hard Skills</div>
              <div className="sobre-figma-divider sobre-figma-divider--short" />
              <ul className="sobre-figma-list">
                <li>JavaScript</li>
                <li>Python</li>
                <li>React</li>
              </ul>
            </section>

            <section className="sobre-figma-card" style={cardBaseStyle}>
              <div className="sobre-figma-card__title">Soft Skills</div>
              <div className="sobre-figma-divider sobre-figma-divider--short" />
              <ul className="sobre-figma-list">
                <li>Comunicação</li>
                <li>Trabalho em equipe</li>
                <li>Proatividade</li>
                <li>Criatividade</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreScreen;

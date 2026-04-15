import React from 'react';
import '../../App.css';
import { CONTAINER_STYLES } from '../../constants/theme';

function ExperienciaScreen() {
  const cardBaseStyle = {
    background: '#1E1E1E',
    borderRadius: 46,
    border: '2px solid white',
    color: 'white',
  };

  return (
    <div className="page-container" style={{ ...CONTAINER_STYLES.page, background: '#1E1E1E' }}>
      <div className="exp-figma-wrapper">
        <div className="exp-figma-layout">
          <aside className="exp-figma-timeline" aria-label="Linha do tempo">
            <div className="exp-figma-timeline__line" aria-hidden="true" />
            <div className="exp-figma-timeline__year exp-figma-timeline__year--top">2026</div>
            <div className="exp-figma-timeline__year exp-figma-timeline__year--second">2025</div>
            <div className="exp-figma-timeline__year exp-figma-timeline__year--third">2023</div>
            <div className="exp-figma-timeline__year exp-figma-timeline__year--fourth">2020</div>
          </aside>

          <main className="exp-figma-cards">
            <section className="exp-figma-card" style={cardBaseStyle}>
              <div className="exp-figma-card__title">Membro efetivo na Pixel</div>
              <div className="exp-figma-card__divider" />
              <div className="exp-figma-card__subtitle">Empresa júnior de soluções tecnológicas da UFSC</div>
              <div className="exp-figma-card__divider" />
              <p className="exp-figma-card__text">
                Aprendizado na prática sobre projetos de tecnologia e contato com empresas.
              </p>
              <div className="exp-figma-card__divider" />
              <p className="exp-figma-card__text">
                Skills desbloqueadas: React.js, JavaScript e trabalho em equipe.
              </p>
            </section>

            <section className="exp-figma-card" style={cardBaseStyle}>
              <div className="exp-figma-card__title">Ingresso na graduação UFSC</div>
              <div className="exp-figma-card__divider" />
              <div className="exp-figma-card__subtitle">Bacharelado em Sistemas de Informação</div>
              <div className="exp-figma-card__divider exp-figma-card__divider--tilt" />
              <p className="exp-figma-card__text">
                Primeiro grande upgrade: contato com nova cultura, idioma e independência.
                Skills desbloqueadas: adaptação, comunicação, autonomia.
              </p>
              <div className="exp-figma-card__divider" />
              <p className="exp-figma-card__text">
                Skills desbloqueadas: Python e lógica de programação.
              </p>
            </section>

            <section className="exp-figma-card" style={cardBaseStyle}>
              <div className="exp-figma-card__title">Formação Ensino médio</div>
              <div className="exp-figma-card__divider" />
              <div className="exp-figma-card__subtitle">Conclusão do Ensino Médio Técnico em Química no IFSC</div>
              <div className="exp-figma-card__divider" />
              <p className="exp-figma-card__text">
                Me ajudou muito a entrar no meio da tecnologia, área que tenho bastante interesse e fascínio.
              </p>
              <div className="exp-figma-card__divider" />
              <p className="exp-figma-card__text">
                Skills desbloqueadas: Lógica, responsabilidade acadêmica e práticas laboratoriais.
              </p>
            </section>

            <section className="exp-figma-card" style={cardBaseStyle}>
              <div className="exp-figma-card__title">Exploração Internacional</div>
              <div className="exp-figma-card__divider" />
              <div className="exp-figma-card__subtitle">Intercâmbio na Alemanha</div>
              <div className="exp-figma-card__divider" />
              <p className="exp-figma-card__text">
                Primeiro grande upgrade: contato com nova cultura, idioma e independência.
                Skills desbloqueadas: adaptação, comunicação, autonomia.
              </p>
              <div className="exp-figma-card__divider" />
              <p className="exp-figma-card__text">
                Skills desbloqueadas: adaptação, comunicação e autonomia.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ExperienciaScreen;

import React from 'react';
import '../../App.css';
import { CONTAINER_STYLES, COLORS, BORDER_STYLES, FONTS } from '../../constants/theme';

function ExperienciaScreen() {
  return (
    <div className="page-container" style={CONTAINER_STYLES.page}>
      {/* Card Experiência 1 */}
      <div
        style={{
          width: 580,
          height: 420,
          left: 100,
          top: 150,
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 413,
            height: 500,
            left: 146,
            top: 93,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        <div
          style={{
            width: 411,
            height: 21,
            left: 150,
            top: 98,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Botões de janela */}
        <div
          style={{
            width: 12,
            height: 12,
            left: 536,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            left: 516,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            left: 496,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 6,
            height: 6,
            left: 519,
            top: 105.5,
            position: 'absolute',
            background: '#D9D9D9',
            border: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 6,
            height: 11,
            left: 539,
            top: 101,
            position: 'absolute',
            color: COLORS.border,
            fontSize: 14,
            fontFamily: 'Jersey 10',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          x
        </div>
        <div
          style={{
            width: 7,
            height: 9,
            left: 498,
            top: 103,
            position: 'absolute',
            color: COLORS.border,
            fontSize: 14,
            fontFamily: 'Jersey 10',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          -
        </div>
        {/* Barra de scroll */}
        <div
          style={{
            width: 9,
            height: 230,
            left: 539,
            top: 137,
            position: 'absolute',
            background: COLORS.headerBackground,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 542,
            top: 137,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 6,
            height: 3,
            left: 539,
            top: 140,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 545,
            top: 140,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 542,
            top: 364,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 9,
            height: 3,
            left: 539,
            top: 361,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 107,
            left: 542,
            top: 150,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        {/* Título */}
        <div
          style={{
            width: 500,
            height: 29,
            left: 167,
            top: 120,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 26,
            fontFamily: FONTS.tiny5,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Level 2019 | Internacional
        </div>
        {/* Conteúdo */}
        <div
          style={{
            width: 320,
            height: 232,
            left: 167,
            top: 150,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 28,
            fontFamily: "'Jersey 10', sans-serif",
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Intercâmbio na Alemanha
          <br />
          <br />
          Primeiro grande upgrade: contato com nova cultura, idioma e independência.
          <br />
          <br />
          Skills desbloqueadas: adaptação, comunicação, autonomia.
        </div>
      </div>

      {/* Card Experiência 2 */}
      <div
        style={{
          width: 580,
          height: 460,
          left: 700,
          top: 140,
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 413,
            height: 560,
            left: 146,
            top: 93,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        <div
          style={{
            width: 411,
            height: 21,
            left: 150,
            top: 98,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Botões de janela */}
        <div
          style={{
            width: 12,
            height: 12,
            left: 536,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            left: 516,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            left: 496,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 6,
            height: 6,
            left: 519,
            top: 105.5,
            position: 'absolute',
            background: '#D9D9D9',
            border: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 6,
            height: 11,
            left: 539,
            top: 101,
            position: 'absolute',
            color: COLORS.border,
            fontSize: 14,
            fontFamily: 'Jersey 10',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          x
        </div>
        <div
          style={{
            width: 7,
            height: 9,
            left: 498,
            top: 103,
            position: 'absolute',
            color: COLORS.border,
            fontSize: 14,
            fontFamily: 'Jersey 10',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          -
        </div>
        {/* Barra de scroll */}
        <div
          style={{
            width: 9,
            height: 230,
            left: 539,
            top: 137,
            position: 'absolute',
            background: COLORS.headerBackground,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 542,
            top: 137,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 6,
            height: 3,
            left: 539,
            top: 140,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 545,
            top: 140,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 542,
            top: 364,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 9,
            height: 3,
            left: 539,
            top: 361,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 107,
            left: 542,
            top: 150,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        {/* Título */}
        <div
          style={{
            width: 200,
            height: 29,
            left: 167,
            top: 120,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 26,
            fontFamily: FONTS.tiny5,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Level 2023 | E.M
        </div>
        {/* Conteúdo */}
        <div
          style={{
            width: 320,
            height: 232,
            left: 167,
            top: 150,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 28,
            fontFamily: "'Jersey 10', sans-serif",
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Conclusão do Ensino Médio Técnico em Química – IFSC
          <br />
          <br />
          Base sólida em pensamento analítico, organização e resolução de problemas.
          <br />
          <br />
          Skills desbloqueadas: lógica, responsabilidade, método científico.
        </div>
      </div>

      {/* Card Experiência 3 */}
      <div
        style={{
          width: 580,
          height: 550,
          left: 400,
          top: 550,
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 413,
            height: 420,
            left: 146,
            top: 93,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        <div
          style={{
            width: 411,
            height: 21,
            left: 150,
            top: 98,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Botões de janela */}
        <div
          style={{
            width: 12,
            height: 12,
            left: 536,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            left: 516,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            left: 496,
            top: 103,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.small,
            borderBottom: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 6,
            height: 6,
            left: 519,
            top: 105.5,
            position: 'absolute',
            background: '#D9D9D9',
            border: BORDER_STYLES.small,
          }}
        />
        <div
          style={{
            width: 6,
            height: 11,
            left: 539,
            top: 101,
            position: 'absolute',
            color: COLORS.border,
            fontSize: 14,
            fontFamily: 'Jersey 10',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          x
        </div>
        <div
          style={{
            width: 7,
            height: 9,
            left: 498,
            top: 103,
            position: 'absolute',
            color: COLORS.border,
            fontSize: 14,
            fontFamily: 'Jersey 10',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          -
        </div>
        {/* Barra de scroll */}
        <div
          style={{
            width: 9,
            height: 230,
            left: 539,
            top: 137,
            position: 'absolute',
            background: COLORS.headerBackground,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 542,
            top: 137,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 6,
            height: 3,
            left: 539,
            top: 140,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 545,
            top: 140,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 542,
            top: 364,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 9,
            height: 3,
            left: 539,
            top: 361,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 107,
            left: 542,
            top: 150,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        {/* Título */}
        <div
          style={{
            width: 400,
            height: 29,
            left: 167,
            top: 120,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 26,
            fontFamily: FONTS.tiny5,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Level 2025 | atualmente
        </div>
        {/* Conteúdo */}
        <div
          style={{
            width: 320,
            height: 232,
            left: 167,
            top: 150,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 28,
            fontFamily: "'Jersey 10', sans-serif",
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Ingresso na graduação em Sistemas de Informação - UFSC
          <br />
          <br />
          Entrada na Empresa Júnior Pixel Início da jornada no mundo da tecnologia e projetos reais, trabalhando em equipe e aprendendo na prática.
          <br />
          <br />
          Skills desbloqueadas: trabalho em equipe, tecnologia, projetos digitais.
        </div>
      </div>
    </div>
  );
}

export default ExperienciaScreen;

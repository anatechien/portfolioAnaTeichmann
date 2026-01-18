import React from 'react';
import '../../App.css';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { CONTAINER_STYLES, COLORS, BORDER_STYLES, FONTS } from '../../constants/theme';

function SobreScreen() {
  useScrollToTop();

  return (
    <div style={CONTAINER_STYLES.page}>
      {/* Card Ana Teichmann */}
      <div
        style={{
          width: 580,
          height: 1200,
          left: 100,
          top: 181,
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
          Ana Teichmann
        </div>
        {/* Conteúdo */}
        <div
          style={{
            width: 320,
            height: 232,
            left: 167,
            top: 140,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 28,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          (✿◡‿◡) &lt;3&lt;3&lt;3
          <br />
          <br />
          idade: 21
          <br />
          <br />
          Status: Atualmente explorando diferentes áreas de tecnologia, para descobrir onde suas habilidades causam mais impacto.
          <br />
          <br />
          Descrição: Personagem curiosa em constante evolução, sempre em busca de novos conhecimentos para subir de nível.
        </div>
      </div>

      {/* Hard skills */}
      <div
        style={{
          width: 580,
          height: 401,
          left: 558,
          top: 400,
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 413,
            height: 289,
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
        {/* Botões de janela Hard skills */}
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
        {/* Barra de scroll Hard skills */}
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
        <div
          style={{
            width: 124,
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
          Hard skills:
        </div>
        <div
          style={{
            width: 320,
            height: 232,
            left: 167,
            top: 173,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 28,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          - Javascript
          <br />
          <br />
          - Python
          <br />
          <br />
          - React.js
          <br />
          <br />
        </div>
      </div>

      {/* Soft skills */}
      <div
        style={{
          width: 580,
          height: 420,
          left: 558,
          top: 50,
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 413,
            height: 300,
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
        {/* Botões de janela Soft skills */}
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
        {/* Barra de scroll Soft skills */}
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
        <div
          style={{
            width: 124,
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
          Soft skills:
        </div>
        <div
          style={{
            width: 49,
            height: 3,
            left: 292,
            top: 163,
            position: 'absolute',
          }}
        />
        <div
          style={{
            width: 320,
            height: 232,
            left: 167,
            top: 173,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 28,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          - Comunicação
          <br />
          <br />
          - Trabalho em equipe
          <br />
          <br />
          - Proatividade
          <br />
          <br />
          - Criatividade
        </div>
      </div>
    </div>
  );
}

export default SobreScreen;

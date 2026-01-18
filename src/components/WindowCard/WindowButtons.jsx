import React from 'react';
import { FONTS, COLORS, BORDER_STYLES } from '../../constants/theme';

/**
 * Componente reutilizável para os botões de janela (minimizar, maximizar, fechar)
 */
function WindowButtons({ left, top, fontSize = 14 }) {
  const buttonSize = 12;
  const buttonSpacing = 20;
  const closeButtonLeft = left + buttonSpacing * 2;
  const maximizeButtonLeft = left + buttonSpacing;
  const minimizeButtonLeft = left;

  return (
    <>
      {/* Botão fechar (x) */}
      <div
        style={{
          width: buttonSize,
          height: buttonSize,
          left: closeButtonLeft,
          top: top + 2,
          position: 'absolute',
          background: COLORS.cardBackground,
          borderRight: BORDER_STYLES.small,
          borderBottom: BORDER_STYLES.small,
        }}
      />
      {/* Botão maximizar (□) */}
      <div
        style={{
          width: buttonSize,
          height: buttonSize,
          left: maximizeButtonLeft,
          top: top + 2,
          position: 'absolute',
          background: COLORS.cardBackground,
          borderRight: BORDER_STYLES.small,
          borderBottom: BORDER_STYLES.small,
        }}
      />
      {/* Botão minimizar (-) */}
      <div
        style={{
          width: buttonSize,
          height: buttonSize,
          left: minimizeButtonLeft,
          top: top + 2,
          position: 'absolute',
          background: COLORS.cardBackground,
          borderRight: BORDER_STYLES.small,
          borderBottom: BORDER_STYLES.small,
        }}
      />
      {/* Ícone maximizar (quadrado interno) */}
      <div
        style={{
          width: 6,
          height: 6,
          left: maximizeButtonLeft + 2,
          top: top + 4.5,
          position: 'absolute',
          background: COLORS.cardBackground,
          border: BORDER_STYLES.small,
        }}
      />
      {/* Texto fechar (x) */}
      <div
        style={{
          width: 6,
          height: 11,
          left: closeButtonLeft + 4,
          top: top,
          position: 'absolute',
          color: COLORS.border,
          fontSize,
          fontFamily: FONTS.jersey10,
          fontWeight: 400,
          wordWrap: 'break-word',
        }}
      >
        x
      </div>
      {/* Texto minimizar (-) */}
      <div
        style={{
          width: 7,
          height: 9,
          left: minimizeButtonLeft + 2,
          top: top + 2,
          position: 'absolute',
          color: COLORS.border,
          fontSize,
          fontFamily: FONTS.jersey10,
          fontWeight: 400,
          wordWrap: 'break-word',
        }}
      >
        -
      </div>
    </>
  );
}

export default WindowButtons;

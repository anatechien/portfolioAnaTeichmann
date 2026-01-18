import React from 'react';
import { COLORS, BORDER_STYLES, FONTS } from '../../constants/theme';
import WindowButtons from './WindowButtons';
import WindowScrollbar from './WindowScrollbar';

/**
 * Componente reutilizável para cards com estilo de janela
 * @param {Object} props
 * @param {number} props.width - Largura do card
 * @param {number} props.height - Altura do card
 * @param {number} props.left - Posição esquerda
 * @param {number} props.top - Posição superior
 * @param {number} props.innerWidth - Largura do conteúdo interno
 * @param {number} props.innerHeight - Altura do conteúdo interno
 * @param {number} props.innerLeft - Posição esquerda do conteúdo interno
 * @param {number} props.innerTop - Posição superior do conteúdo interno
 * @param {string} props.title - Título da janela
 * @param {number} props.titleLeft - Posição esquerda do título
 * @param {number} props.titleTop - Posição superior do título
 * @param {number} props.scrollbarLeft - Posição esquerda da scrollbar
 * @param {number} props.scrollbarTop - Posição superior da scrollbar
 * @param {number} props.scrollbarHeight - Altura da scrollbar
 * @param {number} props.scrollbarThumbHeight - Altura do thumb da scrollbar
 * @param {React.ReactNode} props.children - Conteúdo do card
 * @param {string} props.href - URL opcional para tornar o card clicável
 */
function WindowCard({
  width,
  height,
  left,
  top,
  innerWidth,
  innerHeight,
  innerLeft,
  innerTop,
  title,
  titleLeft,
  titleTop,
  scrollbarLeft,
  scrollbarTop,
  scrollbarHeight,
  scrollbarThumbHeight = 107,
  children,
  href,
}) {
  const headerHeight = 21;
  const buttonsContainerWidth = 64;
  const buttonsContainerHeight = 23;
  const buttonsLeft = titleLeft + (innerWidth || 216) - buttonsContainerWidth - 18;
  const buttonsTop = titleTop + 2;

  // Se não houver título, usar posição padrão
  const actualTitleLeft = titleLeft || innerLeft + 4;
  const actualTitleTop = titleTop || innerTop + 4;

  const cardContent = (
    <>
      {/* Fundo do card */}
      <div
        style={{
          width: innerWidth,
          height: innerHeight,
          left: innerLeft,
          top: innerTop,
          position: 'absolute',
          background: COLORS.cardBackground,
          borderRight: BORDER_STYLES.right,
          borderBottom: BORDER_STYLES.bottom,
        }}
      />
      {/* Barra superior (header) */}
      {title && (
        <div
          style={{
            width: innerWidth - 4,
            height: headerHeight,
            left: actualTitleLeft,
            top: actualTitleTop,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
      )}
      {/* Botões de janela */}
      {title && (
        <div
          style={{
            width: buttonsContainerWidth,
            height: buttonsContainerHeight,
            left: buttonsLeft,
            top: buttonsTop,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <WindowButtons left={0} top={0} />
        </div>
      )}
      {/* Scrollbar */}
      {scrollbarLeft && scrollbarTop && (
        <WindowScrollbar
          left={scrollbarLeft}
          top={scrollbarTop}
          height={scrollbarHeight}
          scrollbarHeight={scrollbarThumbHeight}
        />
      )}
      {/* Conteúdo */}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width,
          height,
          left,
          top,
          position: 'absolute',
          overflow: 'hidden',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'block',
        }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      style={{
        width,
        height,
        left,
        top,
        position: 'absolute',
        overflow: 'hidden',
      }}
    >
      {cardContent}
    </div>
  );
}

export default WindowCard;

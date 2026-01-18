import React from 'react';
import '../../App.css';
import { CONTAINER_STYLES, COLORS, BORDER_STYLES, FONTS, EXTERNAL_LINKS } from '../../constants/theme';

function ProjetosScreen() {
  return (
    <div style={CONTAINER_STYLES.page}>
      {/* Card Projeto 1 */}
      <a
        href={EXTERNAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: 269,
          height: 371,
          left: 205,
          top: 157,
          position: 'absolute',
          overflow: 'hidden',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'block',
        }}
      >
        {/* Fundo do card */}
        <div
          style={{
            width: 241,
            height: 343,
            left: 17,
            top: 12,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Barra superior */}
        <div
          style={{
            width: 216,
            height: 21,
            left: 35,
            top: 24,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Botões de janela */}
        <div
          style={{
            width: 64,
            height: 23,
            left: 187,
            top: 22,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              left: 49,
              top: 6,
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
              left: 29,
              top: 6,
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
              left: 9,
              top: 6,
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
              left: 32,
              top: 8.5,
              position: 'absolute',
              background: '#D9D9D9',
              border: BORDER_STYLES.small,
            }}
          />
          <div
            style={{
              width: 6,
              height: 11,
              left: 52,
              top: 4,
              position: 'absolute',
              color: COLORS.border,
              fontSize: 14,
              fontFamily: FONTS.jersey10,
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
              left: 11,
              top: 6,
              position: 'absolute',
              color: COLORS.border,
              fontSize: 14,
              fontFamily: FONTS.jersey10,
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            -
          </div>
        </div>
        {/* Barra de scroll */}
        <div
          style={{
            width: 17,
            height: 255,
            left: 234,
            top: 45,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 9,
              height: 230,
              left: 5,
              top: 12,
              position: 'absolute',
              background: COLORS.headerBackground,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 8,
              top: 12,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 6,
              height: 3,
              left: 5,
              top: 15,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 11,
              top: 15,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 8,
              top: 239,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 9,
              height: 3,
              left: 5,
              top: 236,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 107,
              left: 8,
              top: 25,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
        </div>
        {/* Imagem do projeto */}
        <div
          style={{
            width: 193,
            height: 117,
            left: 35,
            top: 60,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Título */}
        <div
          style={{
            left: 35,
            top: 184,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 24,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Projeto 1
        </div>
        {/* Descrição */}
        <div
          style={{
            left: 35,
            top: 217,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 24,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Descrição:
        </div>
      </a>

      {/* Card Projeto 2 */}
      <a
        href={EXTERNAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: 269,
          height: 371,
          left: 557,
          top: 159,
          position: 'absolute',
          overflow: 'hidden',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'block',
        }}
      >
        {/* Fundo do card */}
        <div
          style={{
            width: 241,
            height: 343,
            left: 17,
            top: 12,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Barra superior */}
        <div
          style={{
            width: 216,
            height: 21,
            left: 35,
            top: 24,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Botões de janela */}
        <div
          style={{
            width: 64,
            height: 23,
            left: 187,
            top: 22,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              left: 49,
              top: 6,
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
              left: 29,
              top: 6,
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
              left: 9,
              top: 6,
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
              left: 32,
              top: 8.5,
              position: 'absolute',
              background: '#D9D9D9',
              border: BORDER_STYLES.small,
            }}
          />
          <div
            style={{
              width: 6,
              height: 11,
              left: 52,
              top: 4,
              position: 'absolute',
              color: COLORS.border,
              fontSize: 14,
              fontFamily: FONTS.jersey10,
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
              left: 11,
              top: 6,
              position: 'absolute',
              color: COLORS.border,
              fontSize: 14,
              fontFamily: FONTS.jersey10,
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            -
          </div>
        </div>
        {/* Barra de scroll */}
        <div
          style={{
            width: 17,
            height: 255,
            left: 234,
            top: 45,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 9,
              height: 230,
              left: 5,
              top: 12,
              position: 'absolute',
              background: COLORS.headerBackground,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 8,
              top: 12,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 6,
              height: 3,
              left: 5,
              top: 15,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 11,
              top: 15,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 8,
              top: 239,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 9,
              height: 3,
              left: 5,
              top: 236,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 107,
              left: 8,
              top: 25,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
        </div>
        {/* Imagem do projeto */}
        <div
          style={{
            width: 193,
            height: 117,
            left: 35,
            top: 60,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Título */}
        <div
          style={{
            left: 35,
            top: 184,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 24,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Projeto 2
        </div>
        {/* Descrição */}
        <div
          style={{
            left: 35,
            top: 217,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 24,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Descrição:
        </div>
      </a>

      {/* Card Projeto 3 */}
      <a
        href={EXTERNAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: 269,
          height: 371,
          left: 909,
          top: 159,
          position: 'absolute',
          overflow: 'hidden',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'block',
        }}
      >
        {/* Fundo do card */}
        <div
          style={{
            width: 241,
            height: 343,
            left: 17,
            top: 12,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Barra superior */}
        <div
          style={{
            width: 216,
            height: 21,
            left: 35,
            top: 24,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Botões de janela */}
        <div
          style={{
            width: 64,
            height: 23,
            left: 187,
            top: 22,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              left: 49,
              top: 6,
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
              left: 29,
              top: 6,
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
              left: 9,
              top: 6,
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
              left: 32,
              top: 8.5,
              position: 'absolute',
              background: '#D9D9D9',
              border: BORDER_STYLES.small,
            }}
          />
          <div
            style={{
              width: 6,
              height: 11,
              left: 52,
              top: 4,
              position: 'absolute',
              color: COLORS.border,
              fontSize: 14,
              fontFamily: FONTS.jersey10,
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
              left: 11,
              top: 6,
              position: 'absolute',
              color: COLORS.border,
              fontSize: 14,
              fontFamily: FONTS.jersey10,
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            -
          </div>
        </div>
        {/* Barra de scroll */}
        <div
          style={{
            width: 17,
            height: 255,
            left: 234,
            top: 45,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 9,
              height: 230,
              left: 5,
              top: 12,
              position: 'absolute',
              background: COLORS.headerBackground,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 8,
              top: 12,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 6,
              height: 3,
              left: 5,
              top: 15,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 11,
              top: 15,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              left: 8,
              top: 239,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 9,
              height: 3,
              left: 5,
              top: 236,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 3,
              height: 107,
              left: 8,
              top: 25,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
        </div>
        {/* Imagem do projeto */}
        <div
          style={{
            width: 193,
            height: 117,
            left: 35,
            top: 60,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Título */}
        <div
          style={{
            left: 35,
            top: 184,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 24,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Projeto 3
        </div>
        {/* Descrição */}
        <div
          style={{
            left: 35,
            top: 217,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 24,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Descrição:
        </div>
      </a>
    </div>
  );
}

export default ProjetosScreen;

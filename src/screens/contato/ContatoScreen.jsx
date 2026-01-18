import React from 'react';
import '../../App.css';
import { CONTAINER_STYLES, COLORS, BORDER_STYLES, FONTS, EXTERNAL_LINKS } from '../../constants/theme';
import githubPixel from '../../assets/githubPixel.png';
import linkedinpixel from '../../assets/linkedinpixel.png';

function ContatoScreen() {
  return (
    <div style={CONTAINER_STYLES.page}>
      {/* Card de Contato */}
      <div
        style={{
          width: 828,
          height: 475,
          left: 367,
          top: 159,
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        {/* Fundo do card */}
        <div
          style={{
            width: 1033,
            height: 487,
            left: 0,
            top: -12,
            position: 'absolute',
            background: COLORS.cardBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Barra superior */}
        <div
          style={{
            width: 804,
            height: 21,
            left: 14,
            top: 10,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        {/* Barra de scroll */}
        <div
          style={{
            width: 9,
            height: 414,
            left: 803,
            top: 39,
            position: 'absolute',
            background: COLORS.headerBackground,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 806,
            top: 46,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 6,
            height: 3,
            left: 803,
            top: 48,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 3,
            left: 809,
            top: 48,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        <div
          style={{
            width: 3,
            height: 287,
            left: 806,
            top: 50,
            position: 'absolute',
            background: COLORS.border,
          }}
        />
        {/* Botões de janela */}
        <div
          style={{
            width: 69,
            height: 18,
            left: 749,
            top: 13,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              left: 49,
              top: 2,
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
              top: 2,
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
              top: 2,
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
              top: 4.5,
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
              top: 0,
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
              top: 2,
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
        {/* Indicador de scroll inferior */}
        <div
          style={{
            width: 17,
            height: 16,
            left: 800,
            top: 442,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 3,
              height: 3,
              left: 6,
              top: 6,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
          <div
            style={{
              width: 9,
              height: 3,
              left: 3,
              top: 3,
              position: 'absolute',
              background: COLORS.border,
            }}
          />
        </div>
        {/* Ícone GitHub */}
        <a
          href={EXTERNAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 26,
            height: 26,
            left: 700,
            top: 394,
            position: 'absolute',
            cursor: 'pointer',
          }}
        >
          <img
            style={{
              width: 26,
              height: 26,
            }}
            src={githubPixel}
            alt="GitHub"
          />
        </a>
        {/* Título */}
        <div
          style={{
            left: 266,
            top: 46,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 32,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Vamos Trabalhar juntos?
        </div>
        {/* Campo Nome */}
        <div
          style={{
            width: 662,
            height: 49,
            left: 73,
            top: 92,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 643,
              height: 29,
              left: 10,
              top: 5,
              position: 'absolute',
              background: COLORS.headerBackground,
              borderRight: '2px #444444 solid',
              borderBottom: '2px #444444 solid',
            }}
          />
          <div
            style={{
              left: 18,
              top: 3,
              position: 'absolute',
              color: COLORS.textDark,
              fontSize: 32,
              fontFamily: FONTS.jersey10,
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            Nome:
          </div>
        </div>
        {/* Campo Email */}
        <div
          style={{
            width: 662,
            height: 49,
            left: 73,
            top: 139,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 643,
              height: 29,
              left: 10,
              top: 5,
              position: 'absolute',
              background: COLORS.headerBackground,
              borderRight: '2px #444444 solid',
              borderBottom: '2px #444444 solid',
            }}
          />
          <div
            style={{
              left: 18,
              top: 3,
              position: 'absolute',
              color: COLORS.textDark,
              fontSize: 32,
              fontFamily: FONTS.jersey10,
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            Email:
          </div>
        </div>
        {/* Campo Mensagem */}
        <div
          style={{
            width: 662,
            height: 148,
            left: 74,
            top: 189,
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 643,
              height: 143,
              left: 10,
              top: 5,
              position: 'absolute',
              background: COLORS.headerBackground,
              borderRight: '2px #444444 solid',
              borderBottom: '2px #444444 solid',
            }}
          />
          <div
            style={{
              left: 18,
              top: 3,
              position: 'absolute',
              color: COLORS.textDark,
              fontSize: 32,
              fontFamily: FONTS.jersey10,
              fontWeight: 400,
              wordWrap: 'break-word',
            }}
          >
            Mensagem:
          </div>
        </div>
        {/* Botão Enviar */}
        <div
          style={{
            width: 130,
            height: 29,
            left: 84,
            top: 391,
            position: 'absolute',
            background: COLORS.headerBackground,
            borderRight: BORDER_STYLES.right,
            borderBottom: BORDER_STYLES.bottom,
          }}
        />
        <div
          style={{
            left: 92,
            top: 386,
            position: 'absolute',
            color: COLORS.textDark,
            fontSize: 32,
            fontFamily: FONTS.jersey10,
            fontWeight: 400,
            wordWrap: 'break-word',
          }}
        >
          Enviar
        </div>
        {/* Ícone LinkedIn */}
        <a
          href={EXTERNAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 30,
            height: 28,
            left: 634,
            top: 392,
            position: 'absolute',
            cursor: 'pointer',
          }}
        >
          <img
            style={{
              width: 30,
              height: 28,
            }}
            src={linkedinpixel}
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}

export default ContatoScreen;

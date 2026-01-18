import React from 'react';
import { COLORS } from '../../constants/theme';

/**
 * Componente reutilizável para a barra de scroll lateral
 */
function WindowScrollbar({ left, top, height, scrollbarHeight = 107 }) {
  const scrollbarWidth = 9;
  const scrollbarTrackLeft = left + 5;
  const scrollbarTrackTop = top + 12;
  const scrollbarTrackHeight = height - 24;

  return (
    <div
      style={{
        width: 17,
        height: height,
        left,
        top,
        position: 'absolute',
        overflow: 'hidden',
      }}
    >
      {/* Track da scrollbar */}
      <div
        style={{
          width: scrollbarWidth,
          height: scrollbarTrackHeight,
          left: scrollbarTrackLeft,
          top: scrollbarTrackTop,
          position: 'absolute',
          background: COLORS.headerBackground,
        }}
      />
      {/* Seta superior */}
      <div
        style={{
          width: 3,
          height: 3,
          left: scrollbarTrackLeft + 3,
          top: scrollbarTrackTop,
          position: 'absolute',
          background: COLORS.border,
        }}
      />
      <div
        style={{
          width: 6,
          height: 3,
          left: scrollbarTrackLeft,
          top: scrollbarTrackTop + 3,
          position: 'absolute',
          background: COLORS.border,
        }}
      />
      <div
        style={{
          width: 3,
          height: 3,
          left: scrollbarTrackLeft + 6,
          top: scrollbarTrackTop + 3,
          position: 'absolute',
          background: COLORS.border,
        }}
      />
      {/* Seta inferior */}
      <div
        style={{
          width: 3,
          height: 3,
          left: scrollbarTrackLeft + 3,
          top: scrollbarTrackTop + scrollbarTrackHeight - 3,
          position: 'absolute',
          background: COLORS.border,
        }}
      />
      <div
        style={{
          width: 9,
          height: 3,
          left: scrollbarTrackLeft,
          top: scrollbarTrackTop + scrollbarTrackHeight - 6,
          position: 'absolute',
          background: COLORS.border,
        }}
      />
      {/* Thumb da scrollbar */}
      <div
        style={{
          width: 3,
          height: scrollbarHeight,
          left: scrollbarTrackLeft + 3,
          top: scrollbarTrackTop + 13,
          position: 'absolute',
          background: COLORS.border,
        }}
      />
    </div>
  );
}

export default WindowScrollbar;

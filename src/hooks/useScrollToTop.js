import { useEffect } from 'react';

/**
 * Hook que rola a página para o topo quando o componente é montado
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

import React, { useEffect } from 'react';

const TouchZoomBlocker: React.FC = () => {
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleContextMenu = (event: TouchEvent | MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('contextmenu', handleContextMenu, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null;
};

export default TouchZoomBlocker;

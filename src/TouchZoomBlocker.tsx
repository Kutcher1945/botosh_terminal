import React, { useEffect } from 'react';

const TouchZoomBlocker: React.FC = () => {
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
};

export default TouchZoomBlocker;

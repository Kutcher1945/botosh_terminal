import React, { useEffect } from 'react';

const ZoomDisable: React.FC = () => {
  useEffect(() => {
    const handleZoom = (event: KeyboardEvent) => {
      if (event.ctrlKey && (event.key === '-' || event.key === '=') && !event.shiftKey) {
        event.preventDefault();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleZoom);
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('keydown', handleZoom);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return null;
};

export default ZoomDisable;

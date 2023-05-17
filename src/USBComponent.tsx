import React, { useEffect } from 'react';

const USBComponent: React.FC = () => {
  useEffect(() => {
    const requestDevice = async () => {
      try {
        const device = await navigator.usb.requestDevice({ filters: [] });
        // Access the USB device and perform desired operations
        console.log('Connected device:', device);
      } catch (error) {
        console.error('Failed to request device:', error);
      }
    };

    // Prompt the user to connect the USB device
    requestDevice();

    // Clean up any necessary resources when the component is unmounted
    return () => {
      // Clean up code here, if necessary
    };
  }, []);

  return <div>USB Component</div>;
};

export default USBComponent;

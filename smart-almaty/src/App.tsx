import React, { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    console.log('Button clicked'); // Add a console.log statement for debugging

    // Perform some async task here, such as fetching data from an API
    setTimeout(() => {
      setIsLoading(false);
      console.log('Async task completed'); // Add a console.log statement for debugging
    }, 2000);
  };

  return (
    <div className="App">
      {isLoading && (
        <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
          <span className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{ top: '50%' }}>
            <i className="fas fa-circle-notch fa-spin fa-5x"></i>
          </span>
        </div>
      )}

      <button onClick={handleClick}>Trigger Process</button>
    </div>
  );
}

export default App;

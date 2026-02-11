import React, { useState } from 'react';
// 1. Import the image from your assets folder
import celebrationImg from '../src/assets/love2.jpg'; 

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState(null);
  const [scale, setScale] = useState(1);

  const moveButton = () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    setNoButtonPos({ top: `${y}px`, left: `${x}px` });
    setScale(prev => prev + 0.1);
  };

  if (isAccepted) {
    return (
      <div className="container">
        <h1 className="title">Yay! See you on the 14th! ❤️</h1>
        {/* 2. Use the imported variable here */}
        <img 
          src={celebrationImg} 
          alt="Celebrating" 
          className="celebration-image"
        />
      </div>
    );
  }

  return (
    <div className="container">

      <h1 className="title">SANDULI!!!!! <br/>Will you be my Valentine? 🌹</h1>
      
      <div className="button-group">
        <button 
          className="yes-button" 
          style={{ transform: `scale(${scale})` }}
          onClick={() => setIsAccepted(true)}
        >
          Yes
        </button>

        <button
          className="no-button"
          style={noButtonPos ? {
            position: 'fixed',
            top: noButtonPos.top,
            left: noButtonPos.left,
            zIndex: 999
          } : {
            position: 'relative'
          }}
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
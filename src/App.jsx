import React, { useState } from 'react';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  // Initial position is null so it stays in the normal document flow at first
  const [noButtonPos, setNoButtonPos] = useState(null);
  const [scale, setScale] = useState(1);

  const moveButton = () => {
    // The moment they hover, we set a random position
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    
    setNoButtonPos({ top: `${y}px`, left: `${x}px` });
    setScale(prev => prev + 0.1); // Yes button grows with every "No" attempt
  };

  if (isAccepted) {
    return (
      <div className="container">
        <h1 className="title">Yay! See you on the 14th! ❤️</h1>
        <img 
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp6Z3ZueGZ6Z3ZueGZ6Z3ZueGZ6Z3ZueGZ6Z3ZueGZ6Z3ZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlIDueXKH6vNYqc/giphy.gif" 
          alt="Celebrating" 
          className="celebration-image"
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Sanduliii, Will you be my Valentine? 🌹</h1>
      
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
            position: 'relative' // Initial state
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
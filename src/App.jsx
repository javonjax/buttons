import { useState } from 'react';
import './App.css';

const App = () => {
  // Click counter state
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  });

  // Click history state
  const [clickHistory, setClickHistory] = useState(
    []
  );
  
  // Left button event handler
  const leftClick = () => {
    setClicks(
      {...clicks, left: clicks.left + 1}
    );

    setClickHistory(clickHistory.concat('L'));

    console.log('Left click count:', clicks.left + 1);
  };

  // Right button event handler
  const rightClick = () => {
    setClicks(
      {...clicks, right: clicks.right + 1}
    );

    setClickHistory(clickHistory.concat('R'));

    console.log('Right click count:', clicks.right + 1);
  };

  // Reset button event handler
  const resetClicks = () => {
    setClicks({left: 0, right: 0});
    setClickHistory([]);
    console.log('Reset clicks and click history.');
  };

  return(
    <div>
      <h1>Buttons example</h1>
      <div className='button-parent'>      
        <button className='button-counting' onClick={leftClick}>
          Left
        </button>
        <p>{clicks.left}</p>
        <button className='button-counting' onClick={rightClick}>
          Right
        </button>
        <p>{clicks.right}</p>
      </div>
      <div>
        <p>
          History: {clickHistory}
        </p>
      </div>
      <div>
        <button onClick={resetClicks}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;

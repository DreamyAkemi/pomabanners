import React, { useState} from 'react';
import '../snow.scss';
import '../App.css'

function Snow() {
  const [showSnow, setShowSnow] = useState(false);

  const handleToggle = () => {
    setShowSnow(prev => !prev);
  };

  return (
    <div>
      <button className="toggle-snow" onClick={handleToggle}>
      </button>
      {showSnow && (
        <div className='snowContainer'>
          {[...Array(200)].map((_, index) => (
            <div key={index} className='snow'></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Snow;

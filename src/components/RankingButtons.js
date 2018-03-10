import React from 'react'
import './RankingButtons.css'

const RankingButtons = () => {
  const styleButtons = {display: 'inline-block'};
  return(
      <div style={styleButtons} className="claseButtons">
        <button>+</button>
        <button>-</button>
      </div>
  );
}

export default RankingButtons;
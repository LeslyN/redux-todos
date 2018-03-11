import React from 'react'
// import './RankingButtons.css'

const RankingButtons = () => {
  const styleButtons = {display: 'inline-block'};
  return(
    <div style={styleButtons} className="">
      <button className="btn btn-warning rounded-circle mr-2">+</button>
      <button className="btn btn-warning rounded-circle">-</button>
    </div>
  );
}

export default RankingButtons;
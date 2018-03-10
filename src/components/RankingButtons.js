import React from 'react'
import './RankingButtons.css'

const RankingButtons = () => {
  const styleButtons = {display: 'inline-block'};
  return(
  
      <span style={styleButtons} className="claseButtons">hola</span>
    
  );
}


// const operationsSongs = [
//   { id: 0, nameButton: '+' },
//   { id: 1, nameButton: '-' },
// ];


// const Ranking = () => {
//   // console.log(playList);
//   return (
//     <div className="clase1">
//       { operationsSongs.map((item, index) => {
//         return <button style={{ marginLeft: 10 }}>
//         <b>+</b>
//       </button> 
//         })
//       }
//     </div>
//   )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
// }

export default RankingButtons;
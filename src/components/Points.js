import React from 'react'


// Aquí se visualizará el ranking, se pone en div para visualizarlo mejor
const Points = ({ points }) => {
  return(
    <span className="check-button" style={{ marginLeft: 10 }}><b>{points}</b></span>
  )  
}


export default Points;
import React from 'react'
import './RankingBotons.css'

const operationsSongs = [
  { id: 0, nameButton: '+' },
  { id: 1, nameButton: '-' },
];


const Ranking = () => {
  return (
    <div className="clase1">
      { operationsSongs.map((item, index) => {
        return <button style={{ marginLeft: 10 }}>
        <b>+</b>
      </button> 
        })
      }
    </div>
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

export default Ranking
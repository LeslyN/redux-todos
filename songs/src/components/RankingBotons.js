import React from 'react'
import './RankingBotons.css'

const operationsSongs = [
  { id: 0, nameButton: '+' },
  { id: 1, nameButton: '-' },
];


const Ranking = () => {
  return (
    <div className="clase1">
      { playList.map((item, index) => {
        return <p key={index} id={index}>{item.nameButton}</p>
      })
      }
      
      <table>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

export default RankigBotons;
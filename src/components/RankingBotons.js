import React from 'react'
import './RankingBotons.css'
import SongList from './SongList'

const operationsSongs = [
  { id: 0, nameButton: '+' },
  { id: 1, nameButton: '-' },
];


const Ranking = () => {
  return (
    <div className=""> {SongList}
      { operationsSongs.map((item, index) => {
        return <button className="btn btn-outline-warning rounded-circle" style={{ marginLeft: 10 }}>
        <b>+</b>
      </button> 
        }
      )}
    )
    }
    </div>
  )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

export default Ranking
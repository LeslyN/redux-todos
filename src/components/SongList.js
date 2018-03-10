import React from 'react'
// import './App'
import './SongList.css'
import RankingButtons from './RankingButtons'

const playList = [
  { id: 0, nameSong: 'Minuet in G - J.S Bach' },
  { id: 1, nameSong: 'Sogno - Andrea Bocelli' },
  { id: 2, nameSong: 'Lascia ch\'io pianga - G.F. Händel' },
  { id: 3, nameSong: 'Air - Johan Sebastian Bach' },
  { id: 4, nameSong: 'Passacaglia - Handel-Halvorsen' },
];

// Por motivos de prueba se añaden los estilos.

const boxRankView = {outline: '2px solid green', width: '20px', height:'20px', display: 'inline-block','margin-top': '2em', 'margin-left': '2em'};

// Aquí se visualizará el ranking, se pone en div para visualizarlo mejor
const RankView = () => {
  return(
    <div style={boxRankView}></div>
  )  
}

const SongList = () => {
  return (
    <div className="clase1">
      { playList.map((item, index) => {
        return <p className="ml-3 pr-3" key={index} id={index}>{item.nameSong }<RankView /><RankingButtons/></p>
      })
      }
    </div>
  )
}

export default SongList;
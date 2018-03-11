import React from 'react'
// import './App'
import './SongList.css'
import RankingButtons from './RankingButtons'
import Points from './Points'

const playList = [
  { id: 0, nameSong: 'Minuet in G - J.S Bach', points: '3' },
  { id: 1, nameSong: 'Sogno - Andrea Bocelli', points: '5' },
  { id: 2, nameSong: 'Lascia ch\'io pianga - G.F. Händel', points: '3' },
  { id: 3, nameSong: 'Air - Johan Sebastian Bach', points: '2' },
  { id: 4, nameSong: 'Passacaglia - Handel-Halvorsen', points: '6' },
];

// Por motivos de prueba se añaden los estilos.

// const boxRankView = {outline: '2px solid green', width: '20px', height:'20px', display: 'inline-block','margin-top': '2em', 'margin-left': '2em'};

// // Aquí se visualizará el ranking, se pone en div para visualizarlo mejor
// const RankView = () => {
//   return(
//     <div style={boxRankView}></div>
//   )  
// }

const SongList = () => {
  return (
    <div className="allPlayList">
      { playList.map((item, index) => {
        return <div className="box-playList"><p className="ml-3 pr-3" key={index} id={index}>{item.nameSong }</p><Points /><RankingButtons/></div>
      })
      }
    </div>
  )
}

export default SongList;
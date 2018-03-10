import React from 'react'
// import './App'
import './SongList.css'

const playList = [
  { id: 0, nameSong: 'song nro 1' },
  { id: 1, nameSong: 'song nro 2' },
  { id: 2, nameSong: 'song nro 3' },
  { id: 3, nameSong: 'song nro 4' },
  { id: 4, nameSong: 'song nro 5' },
];

// Por motivos de prueba se añaden los estilos.

const boxRankView = {outline: '2px solid green', width: '20px', height:'20px', display: 'inline-block'};
const RankView = () => {
  return(
    <div style={boxRankView}></div>
  )
  
}

const SongList = () => {
  return (
    <div>
      {playList.map((item, index) => {
        return <p key={index} id={index}>item.nameSong<RankView /></p>})
        }
      
    </div>
    // <table>
    //   <tr>
    //     <td>1</td>
    //     <td>2</td>
    //     <td></td>
    //   </tr>
    //   <tr>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //   </tr>
    //   <tr>
    //     <td></td>
    //     <td></td>
    //     <td></td>
    //   </tr>
    // </table>

  )
}

export default SongList;
import React from 'react'
// import React, { Component } from 'react';
// import './App'
import './SongList.css'
// import RankingButtons from './RankingButtons'
import Points from './Points'
// importando store
import store from '../store';

// const playList = [
//   { id: 0, nameSong: 'Minuet in G - J.S Bach', points: '3' },
//   { id: 1, nameSong: 'Sogno - Andrea Bocelli', points: '5' },
//   { id: 2, nameSong: 'Lascia ch\'io pianga - G.F. Händel', points: '3' },
//   { id: 3, nameSong: 'Air - Johan Sebastian Bach', points: '2' },
//   { id: 4, nameSong: 'Passacaglia - Handel-Halvorsen', points: '6' },
// ];


class SongList extends React.Component {
  constructor() {
    super();
    this.aboutPoints = this.aboutPoints.bind(this);

    this.state = {
      playList: [
        { id: 0, nameSong: 'Minuet in G - J.S Bach', points: '3' },
        { id: 1, nameSong: 'Sogno - Andrea Bocelli', points: '5' },
        { id: 2, nameSong: 'Lascia ch\'io pianga - G.F. Händel', points: '3' },
        { id: 3, nameSong: 'Air - Johan Sebastian Bach', points: '2' },
        { id: 4, nameSong: 'Passacaglia - Handel-Halvorsen', points: '6' }
      ]
    }
  }

  render() {
    return (
      <div className="allPlayList">
        {this.state.playList.map(songs =>
        <div className="box-playList">
          <p className="ml-3 pr-3">{songs.nameSong}</p>
          <div style={{display: 'inline-block'}}>            
            <button className="btn btn-warning rounded-circle mr-2">+</button>
            <button className="btn btn-warning rounded-circle">-</button>
            </div>
            <Points {...songs}/>
        </div>
        )}
      </div>
    );
  }

  // Cuando esto se llame, redux llamará la función reductora
  aboutPoints(songs) {
    // despachando el primer evento, se pasa primero el action
    store.dispatch({
      type : "ADD_TO_CART",
      songs
    });
  }
}



export default SongList;
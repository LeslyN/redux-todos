// import React from 'react'
// // import './RankingButtons.css'
// // importando store
// import store from '../store';

// const RankingButtons = () => {
//   const styleButtons = {display: 'inline-block'};
//   return(
//     <div style={styleButtons} className="">
//       <button className="btn btn-warning rounded-circle mr-2" onClick={() => this.addPoints(item)}>+</button>
//       <button className="btn btn-warning rounded-circle">-</button>
//     </div>
//   );

    
// }

// // Cuando esto se llame, redux llamará la función reductora
//     addPoints(currentSong) {
//       // despachando el primer evento, se pasa primero el action
//       store.dispatch({
//         type : "ADD_POINTS",
//         item
//       });
//     }

// // class ShoppingCart extends Component {
// //   constructor() {
// //     super();
// //     this.removeFromCart = this.removeFromCart.bind(this);

// //     this.state = {
// //       // se inicia con cart vacio
// //       cart: []
// //     };

// //     // nos subscribiremos a los cambios que sucedan en el store
// //     store.subscribe(()=>{
// //       // actualizar el estado local
// //       this.setState({
// //         // aquí se pone que se quiere modificar, osea el cart
// //         // y con qué se modificará: con el cart que este en el store, en el estado global
// //         cart: store.getState().cart
// //       })
// //     }); 
// //   }

// export default RankingButtons;
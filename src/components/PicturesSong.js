import React from 'react'

const route = 'assets/images/'
const images = [{url:'1.jpg'}, {url:'2.jpg'}, {url:'3.jpg'}, {url:'4.jpg'}, {url:'5.jpg'}];


// const ImagesArr = () => {

// }

const PicturesSong = () => {
  // let bla = images.map((val, index)=>{return <img src={val.url} alt={'hola'}/>});
  // let bla = images.map((val, index)=>{return (val)});
    let bla = images.map((val, index)=>{return <img src={route + val.url} alt='hola'/>});
  // return (
  //     // <img src={route + bla[1].url} alt={'alt'}/>
  // );
  return (
    <div>
      <button></button>
        {bla}
      <button></button>
    </div>
  );
}

export default PicturesSong;
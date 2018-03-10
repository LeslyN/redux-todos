import React from 'react'

const route = '../../public/assets/images/'
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',]

const ImagesArr = () => {
  return (
    <div>
      <img src={route +(images.map((val, index) => {return route+val})) } alt={'alt'}/>
    </div>
  );
}

const PicturesSong = () => {
  return (
    <div>
      <button></button>
        <ImagesArr />
      <button></button>
    </div>
  );
}


export default PicturesSong;
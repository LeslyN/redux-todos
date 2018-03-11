import React from 'react'

const route = 'http://localhost:3000/public/assets/images/'
const images = [{url:'1.jpg'}, {url:'2.jpg'}, {url:'3.jpg'}, {url:'4.jpg'}, {url:'5.jpg'}];

// const ImagesArr = () => {

// }

const PicturesSong = () => {
  // let bla = images.map((val, index)=>{return <img src={val.url} alt={'hola'}/>});
  // let bla = images.map((val, index)=>{return (val)});
    let arrayImages = images.map((val) => {
      console.log(route + val.url);
      return (
        <div className="carousel-item">
          <img src={`${route}${val.url}`} className="d-block w-100" alt='hola'/>
        </div>
      )
    }
    );
    // console.log(arrayImages[0]);
  // return (
  //     // <img src={route + bla[1].url} alt={'alt'}/>
  // );
  return (
    // <div>
    //   <button></button>
    //     {bla}
    //   <button></button>
    // </div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {arrayImages}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default PicturesSong;
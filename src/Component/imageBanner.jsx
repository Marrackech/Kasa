



import React from 'react';
import { useState } from 'react'
import "./ComponentStyle/imageBanner.css"

function ImageBanner(props) {
  const pictures = props.pictures;
  const [currentPicture, setCurrentPicture ] = useState(0);
  
  const getClassName = (i) => {
    if(i === currentPicture) return "show";
    return "";
  };
  
  const moveNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };
  
  const moveBack = () => {
    const newCurrentPicture = currentPicture - 1;
    if(newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(newCurrentPicture);
  };
  
  const picturesAvailable = () => {
    return pictures && pictures.length > 1;
  };
  
  const getCaroussel = () => {
    if (!pictures || pictures.length === 0) {
      return null;
    }
    return pictures.map((pic, i) => ( <img key={pic} src={pic} alt="" className={getClassName(i)}/>));
  };
  
  return (
    <div className='banner'>
      <div className="container">
        {getCaroussel()}
      </div>
      {picturesAvailable() && 
        <>
          <p className='numero'>{(pictures.length - currentPicture) % pictures.length + 1}/{pictures.length}</p>
          {pictures.length > 1 && <button className='btn-next' onClick={moveNext}><i className='fas fa-chevron-left'/></button>}
          {pictures.length > 1 && <button className='btn-back' onClick={moveBack}><i className='fas fa-chevron-right'/></button>}
        </>
      }
    </div>
  )
}

export default ImageBanner;

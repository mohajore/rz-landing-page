import React, { useState, useEffect } from "react";
import {  AiOutlineDoubleRight } from "react-icons/ai";
import LightboxExample from "../Blocks/react-image-lightbox-Library";
const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};


const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  images
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = e => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div
    className="gallery-single-img"
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <img
        alt={photo.title}
        style={
          { ...imgStyle }
        }
        {...photo}
        onClick={handleOnClick}
      />
      <div className="gallery-single-img-title">
      <h3>
          Pic Title Here
          </h3>
          <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
              </p>
              <div className="MoreDetailsAndEyeIcon">
              <div className="EyeIcon"> <LightboxExample photo={images} selectedImage={photo} /></div>
              <div className="MoreDetails">More Details &nbsp; &nbsp;<AiOutlineDoubleRight size={25} /></div>
              
              </div>
             
              

      </div>
    </div>
  );
};

export default SelectedImage;

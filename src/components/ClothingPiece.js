import React from "react";

const ClothingPiece = (props) => {
  return (
    <div className="clothing">
      <img alt="artifact" src={props.image}></img>
      <div className="content">
        <div className="name">{props.name}</div>
        <div className="tags">{props.tags}</div>
      </div>
    </div>
  );
};

export default ClothingPiece;

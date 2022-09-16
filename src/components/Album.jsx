import React from "react";


const Album = ({ name, picture, artist }) => {
  return (
    <div className="album">
      <p className="name">{name} hello</p>
      <picture>
        <img src={picture} alt="album" />
      </picture>
      <p className="artist">{artist.name}</p>
    </div>
  );
};

export default Album;
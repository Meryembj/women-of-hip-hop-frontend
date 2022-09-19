import React from "react";

const Artist = ({ name, picture, miniBio, flagSong }) => {
  return (
    <div className="album">
      <p className="name">{name}</p>
      <picture>
        <img src={picture} alt="album" />
      </picture>
      <p className="miniBio">{miniBio}</p>
      <p className="flagSong">{flagSong}</p>
    </div>
  );
};

export default Artist;

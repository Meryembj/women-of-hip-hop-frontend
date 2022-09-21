import React from "react";

const AlbumDetails = ({ albumId, name, picture, artist, album, songs }) => {
  return (
    <div className="container">
      <div className="row">
        <h1>lol {name}</h1>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-title">{album.artist?.name}</h5>
            <div className="card-deck">
             {/*  <img className="card-img-top" src={picture} alt="Card cap"></img> */}
              <div className="card-header">{name}</div>
              <div className="card-body">{songs}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;

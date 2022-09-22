import React from "react";
const AlbumDetails = ({ albumId, name, picture, artist, album, songs }) => {
  return (
    <div className="container">
      <div className="row">
        <h1>{name}</h1>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={picture} alt="Card cap"></img>
            <h5 className="card-title">{album.artist?.name}</h5>
            <div className="card-deck">
              {/*  <img className="card-img-top" src={picture} alt="Card cap"></img> */}
              <div className="list-group">
                <li className="list-group-item">{songs}</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlbumDetails;

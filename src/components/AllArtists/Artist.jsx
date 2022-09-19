import React from "react";

const Artist = ({ name, picture, miniBio, flagSong }) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={picture} alt="Card cap"></img>
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{miniBio}</p>
              <p class="card-text">{flagSong}</p>
              <a href="#" class="btn btn-info">
                Add to favorite
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;

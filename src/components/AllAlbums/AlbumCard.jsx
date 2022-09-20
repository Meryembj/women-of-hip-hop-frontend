import "./Albums.css";
import React from "react";

const Album = ({ name, picture, artist }) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <h5 class="card-title">{artist.name}</h5>
            <div class="card-deck">
              <img class="card-img-top" src={picture} alt="Card cap"></img>
              <div class="card-header">{name}</div>
              <div class="card-body">
                <a href="#" class="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;

import React from "react";
import Navbar from "../Navbar";

const myArtist = ({ picture, name, miniBio, flagSong }) => {
  return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={picture} alt="profile"></img>
                <div class="card-body">
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text">{miniBio}</p>
                  <p class="card-text">{flagSong}</p>
                  <a href="#" class="btn btn-success">
                    Add to favorite
                  </a>
                  <a href="#" class="btn btn-danger">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default myArtist;

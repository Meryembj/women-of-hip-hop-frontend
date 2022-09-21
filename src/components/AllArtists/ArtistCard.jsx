import React from "react";
import { FcLike } from "react-icons/fc";


const Artist = ({ name, picture, miniBio, flagSong, type }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={picture} alt="profile"></img>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{miniBio}</p>
              <p className="card-text">{flagSong}</p>
             {/*  {type === "all" && (
                <a href="#" className="btn btn-info">
                  Add to favorite
                </a>
              )}
              {type === "mine" && (
                <a href="#" className="btn btn-info">
                  Add to favorite
                </a>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;

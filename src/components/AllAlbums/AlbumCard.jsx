import "./Albums.css";
import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Album = ({ name, picture, artist, album }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div key={album._id} className="card" style={{ width: "18rem" }}>
            <h5 className="card-title">{artist?.name}</h5>
            <div className="card-deck">
              <img className="card-img-top" src={picture} alt="Card cap"></img>
              <div className="card-header">{name}</div>
              <div className="card-body">
                <Link to={`/albums/${album._id}`} key={album._id}>
                  <button className="btn btn-primary">Details</button>
                </Link>
                <FcLike></FcLike>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;

import React from "react";
//import Navbar from "../Navbar";
import axios from "axios";
import { useState } from "react";
import { FcLike, FcLikePlaceholder, FcFullTrash } from "react-icons/fc";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists";

const MyArtistCard = ({ picture, name, miniBio, flagSong, artist }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`${API_URL}/${artist._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {})
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={picture} alt="profile"></img>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{miniBio}</p>
                <p className="card-text">{flagSong}</p>
                <FcLikePlaceholder>
                  <FcLike></FcLike>
                </FcLikePlaceholder>
                <button href="#" className="btn btn-primary">
                  Details
                </button>
                <FcFullTrash href="#" onClick={(event) => handleSubmit(event)}>
                  Delete
                </FcFullTrash>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyArtistCard;

import React from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { FcLike, FcLikePlaceholder, FcFullTrash } from "react-icons/fc";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists";

const MyArtistCard = ({ picture, name, miniBio, flagSong, artist }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = (event) => {
    console.log(artist);
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
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={picture} alt="profile"></img>
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{miniBio}</p>
                <p class="card-text">{flagSong}</p>
                <FcLikePlaceholder>
                  <FcLike></FcLike>
                </FcLikePlaceholder>
                <button href="#" class="btn btn-primary">
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

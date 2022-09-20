import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

const MyAlbumCard = ({ name, picture, artist, album }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log(album);
    event.preventDefault();
    axios
      .delete(`${API_URL}/${album._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  /*   useEffect(() => {
    fetchData();
}, [data]); */
  /* 
  useEffect((id) => {
    axios
      .delete("https://women-of-hip-hop.herokuapp.com/artists/myArtists" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        navigate("/myAlbums");
        setStatus(response.data);
      })
      .catch((err) => console.log(err));
  }, []); */

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
                <a href="#" class="btn btn-success">
                  Add to favorite
                </a>
                <a href="#" class="btn btn-primary">
                  Details
                </a>
                <button
                  href="#"
                  class="btn btn-danger"
                  onClick={(event) => handleSubmit(event)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAlbumCard;

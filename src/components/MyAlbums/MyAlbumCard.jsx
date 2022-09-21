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

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-title">{artist.name}</h5>
            <div className="card-deck">
              <img className="card-img-top" src={picture} alt="Card cap"></img>
              <div className="card-header">{name}</div>
              <div className="card-body">
                <button href="#" className="btn btn-success">
                  Add to favorite
                </button>
                <button className="btn btn-primary">Details</button>
                <button
                  href="#"
                  className="btn btn-danger"
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

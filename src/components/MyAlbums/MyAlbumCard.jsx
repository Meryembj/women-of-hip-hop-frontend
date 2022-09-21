import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import UpdateAlbum from "./UpdateAlbum";
import { FcFullTrash } from "react-icons/fc";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

const MyAlbumCard = ({ name, picture, artist, album, setRefresh }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);

  const [showForm, setShowForm] = useState(false);

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
        setRefresh(true);
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
                <Link to={`/albums/${album._id}`} key={album._id}>
                  <button className="btn btn-primary">Details</button>
                </Link>
                <button onClick={() => setShowForm(true)}>
                  {showForm && <UpdateAlbum></UpdateAlbum>}
                </button>
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

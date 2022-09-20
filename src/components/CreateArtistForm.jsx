import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateArtistForm(props) {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [miniBio, setMiniBio] = useState("");
  const [flagSong, setFlagSong] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        "https://women-of-hip-hop.herokuapp.com/artists",
        { name, picture, miniBio, flagSong },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        props.setShowForm(false);
        props.setErrorMessage(
          "Artist successfully added. You can now add your album."
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h1>Create a new artist</h1>
        <form className="form-group">
          <label>Artist Name:</label>
          <input
            className="form-control"
            value={name}
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <label>Picture:</label>
          <input
            className="form-control"
            value={picture}
            type="text"
            onChange={(event) => setPicture(event.target.value)}
          />
          <label>Bio:</label>
          <input
            className="form-control"
            value={miniBio}
            type="text"
            onChange={(event) => setMiniBio(event.target.value)}
          />
          <label>Flag Song:</label>
          <input
            className="form-control"
            value={flagSong}
            type="text"
            onChange={(event) => setFlagSong(event.target.value)}
          />

          <button
            className="btn btn-primary"
            onClick={(event) => handleSubmit(event)}
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateArtistForm;

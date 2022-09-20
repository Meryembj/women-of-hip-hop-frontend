import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateArtistForm from "../components/CreateArtistForm";
import Navbar from "../components/Navbar";

export const CreateAlbum = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState();
  const [songs, setSongs] = useState("");
  const [artist, setArtist] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        "https://women-of-hip-hop.herokuapp.com/albums",
        { name, picture, songs, artist },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        navigate("/myAlbums");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <h1>Create a new album</h1>
      <form onSubmit={handleSubmit} class="form-group">
        <label>Album Name:</label>
        <input
          class="form-control"
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <label>Picture:</label>
        <input
          class="form-control"
          value={picture}
          type="text"
          onChange={(event) => setPicture(event.target.value)}
        />
        <label>Songs:</label>
        <input
          class="form-control"
          value={songs}
          type="text"
          onChange={(event) => setSongs(event.target.value)}
        />
        <label>Artist:</label>
        <input
          class="form-control"
          value={artist}
          type="text"
          onChange={(event) => setArtist(event.target.value)}
        />

        <button type="submit" class="btn btn-primary">
          Create
        </button>
        {errorMessage && (
          <div className="artistNotFound">
            <p className="errorMessage">{errorMessage}</p>
            <button className="Create artist" onClick={() => setShowForm(true)}>
              Create Artist
            </button>
          </div>
        )}
      </form>
      {showForm && (
        <CreateArtistForm
          setErrorMessage={setErrorMessage}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default CreateAlbum;

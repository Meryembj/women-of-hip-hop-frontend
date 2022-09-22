import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CreateArtistForm from "../components/Artists/CreateArtistForm";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

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
        `${API_URL}`,
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
      <form onSubmit={handleSubmit} className="form-group">
        <label>Album Name:</label>
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
        <label>Songs:</label>
        <input
          className="form-control"
          value={songs}
          type="text"
          onChange={(event) => setSongs(event.target.value)}
        />
        <label>Artist:</label>
        <input
          className="form-control"
          value={artist}
          type="text"
          onChange={(event) => setArtist(event.target.value)}
        />

        <button type="submit" className="btn btn-primary">
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

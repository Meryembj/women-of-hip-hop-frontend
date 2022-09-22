import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists";

export const CreateArtist = () => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState();
  const [miniBio, setMiniBio] = useState("");
  const [flagSong, setFlagSong] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(
        `${API_URL}`,
        { name, picture, miniBio, flagSong },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        navigate("/myArtists");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h1>Create a new artist</h1>
        <form onSubmit={handleSubmit} className="form-group">
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

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateArtist;

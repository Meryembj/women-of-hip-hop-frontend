import axios from "axios";
import { useState, useContext } from "react";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists";

function UpdateArtist({ requestId, setRefresh}) {
  const [newName, setNewName] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [newMiniBio, setNewMiniBio] = useState("");
  const [newFlagSong, setNewFlagSong] = useState("");

  const sendUpdate = async (event) => {
    event.preventDefault();
    const body = {};
    if (newName !== '')
      body.name = newName;
    if (newPicture !== '')
      body.picture = newPicture;
    if (newMiniBio !== '')
      body.miniBio = newMiniBio;
    if (newFlagSong !== '')
      body.songs = newFlagSong;

    axios.patch(`${API_URL}/${requestId}`, body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        setRefresh(true);
      });
  };

  return (
    <div>
      <h1>Update your artist</h1>
      <form onSubmit={sendUpdate} className="form-group">
        <label>New name:</label>
        <input
          className="form-control"
          value={newName}
          type="text"
          onChange={(event) => setNewName(event.target.value)}
        />
        <label>New Picture:</label>
        <input
          className="form-control"
          value={newPicture}
          type="text"
          onChange={(event) => setNewPicture(event.target.value)}
        />
        <label>New mini Bio:</label>
        <input
          className="form-control"
          value={newMiniBio}
          type="text"
          onChange={(event) => setNewMiniBio(event.target.value)}
        />
        <label>New flag song:</label>
        <input
          className="form-control"
          value={newFlagSong}
          type="text"
          onChange={(event) => setNewFlagSong(event.target.value)}
        />

        <button onClick={(event) => sendUpdate(event)}>Update</button>
      </form>
    </div>
  );
}
export default UpdateArtist;

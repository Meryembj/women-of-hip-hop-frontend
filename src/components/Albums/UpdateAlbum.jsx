import axios from "axios";
import { useState, useContext } from "react";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

function UpdateAlbum({ requestId, setRefresh }) {
  const [newAlbumName, setNewAlbum] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [newSongs, setNewSongs] = useState("");
  const [newArtist, setNewArtist] = useState("");

  const sendUpdate = async (event) => {
    event.preventDefault();
    const body = {};
    if (newAlbumName !== '')
      body.name = newAlbumName;
    if (newPicture !== '')
      body.picture = newPicture;
    if (newArtist !== '')
      body.artist = newArtist;
    if (newSongs !== '')
      body.songs = newSongs;

    axios.patch(`${API_URL}/${requestId}`, body,
        { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } })
      .then((response) => {
        setRefresh(true);
      });
  };
  return (
    <div>
      <h1>Update your album</h1>
      <form onSubmit={sendUpdate} className="form-group">
        <label>New Album Name:</label>
        <input
          className="form-control"
          value={newAlbumName}
          type="text"
          onChange={(event) => setNewAlbum(event.target.value)}
        />
        <label>New Picture:</label>
        <input
          className="form-control"
          value={newPicture}
          type="text"
          onChange={(event) => setNewPicture(event.target.value)}
        />
        <label>New Songs:</label>
        <input
          className="form-control"
          value={newSongs}
          type="text"
          onChange={(event) => setNewSongs(event.target.value)}
        />
        <label>New Artist:</label>
        <input
          className="form-control"
          value={newArtist}
          type="text"
          onChange={(event) => setNewArtist(event.target.value)}
        />

        <button onClick={(event) => sendUpdate(event)}>Update</button>
      </form>
    </div>
  );
}
export default UpdateAlbum;

import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

function UpdateAlbum(props) {
  const [newAlbumName, setNewAlbum] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [newSongs, setNewSongs] = useState("");
  const [newArtist, setNewArtist] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .patch(
        `${API_URL}/${id}`,
        {
          name: newAlbumName,
          picture: newPicture,
          artist: newArtist,
          songs: newSongs,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/myAlbums");
      });
  };
  return (
    <div>
      <h1>Update your album</h1>
      <form onSubmit={handleSubmit} class="form-group">
        <label>New Album Name:</label>
        <input
          class="form-control"
          value={newAlbumName}
          type="text"
          onChange={(event) => setNewAlbum(event.target.value)}
        />
        <label>New Picture:</label>
        <input
          class="form-control"
          value={newPicture}
          type="text"
          onChange={(event) => setNewPicture(event.target.value)}
        />
        <label>New Songs:</label>
        <input
          class="form-control"
          value={newSongs}
          type="text"
          onChange={(event) => setNewSongs(event.target.value)}
        />
        <label>New Artist:</label>
        <input
          class="form-control"
          value={newArtist}
          type="text"
          onChange={(event) => setNewArtist(event.target.value)}
        />

        <button onClick={(event) => handleSubmit(event)}>Update</button>
      </form>
    </div>
  );
}
export default UpdateAlbum;

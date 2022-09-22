import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists";

function UpdateArtist(props) {
  const [newName, setNewName] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [newMiniBio, setNewMiniBio] = useState("");
  const [newFlagSong, setNewFlagSong] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.patch(`${API_URL}/${id}`,
        {
          name: newName,
          picture: newPicture,
          miniBio: newMiniBio,
          flagSong: newFlagSong,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/myArtists");
      });
  };

  return (
    <div>
      <h1>Update your artist</h1>
      <form onSubmit={handleSubmit} className="form-group">
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

        <button onClick={(event) => handleSubmit(event)}>Update</button>
      </form>
    </div>
  );
}
export default UpdateArtist;

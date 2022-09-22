import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

// COMPONENTS
import UpdateAlbum from "./UpdateAlbum";
import { FcFullTrash } from "react-icons/fc";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";


const AlbumCard = ({ album, type, setRefresh }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.delete(`${API_URL}/${album._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        if (setRefresh)
          setRefresh(true);
      });
  };

  console.log(album);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <h5 className="card-title">{album.artist?.name}</h5>
            <div className="card-deck">
              <img className="card-img-top" src={album.picture} alt="Card cap"></img>
              <div className="card-header">{album.name}</div>
              <div className="card-body">
                <Link to={`/albums/${album._id}`} key={album._id}>
                  <button className="btn btn-primary">Details</button>
                </Link>
                {type === 'mine' &&
                 <>
                   <button onClick={() => setShowForm(true)}>
                     {showForm && <UpdateAlbum />}
                   </button>
                   <button className="btn btn-danger"
                           onClick={(event) => handleSubmit(event)}>
                     Delete</button>
                 </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;

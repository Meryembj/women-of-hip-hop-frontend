import axios from "axios";
import { useState } from "react";

// COMPONENTS
import { FcFullTrash } from "react-icons/fc";
import UpdateArtist from "./UpdateArtist";
import Favorite from "../Favorites/Favorite";

const API_URL = "https://women-of-hip-hop.herokuapp.com";

const ArtistCard = ({ artist, type, setRefresh }) => {
  const [showForm, setShowForm] = useState(false);

  const deleteArtist = (event) => {
    event.preventDefault();
    axios.delete(`${API_URL}/artists/${artist._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        if (setRefresh)
          setRefresh(true);
      });
  };

  if (!artist)
    return (<></>);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={artist?.picture}
              alt="profile"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{artist?.name}</h5>
              <p className="card-text">{artist?.miniBio}</p>
              <p className="card-text">{artist?.flagSong}</p>

              <Favorite artist={artist} setRefresh={setRefresh}
                        favoriteId={type !== 'mine' && type !== 'all' ? type : null}/>
              {type === 'mine' &&
               <>
                 <button className="btn btn-success" onClick={() => setShowForm(true)}>
                   Update
                 </button>
                 <button className="btn btn-danger"
                         onClick={(event) => deleteArtist(event)}>
                   <FcFullTrash></FcFullTrash></button>
                 {showForm && <UpdateArtist requestId={artist._id}  setRefresh={setRefresh} />}
               </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;

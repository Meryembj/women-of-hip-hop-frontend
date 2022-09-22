import axios from "axios";
import { useState } from "react";

// COMPONENTS
import { FcFullTrash } from "react-icons/fc";
import UpdateArtist from "./UpdateArtist";
import Favorite from "../Favorites/Favorite";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists";

const ArtistCard = ({ artist, type, setRefresh }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`${API_URL}/${artist._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setRefresh(true);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={artist.picture}
              alt="profile"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{artist.name}</h5>
              <p className="card-text">{artist.miniBio}</p>
              <p className="card-text">{artist.flagSong}</p>
              <Favorite artistId={artist._id} />
              {/* <FcLikePlaceholder> */}
              {/*   <FcLike></FcLike> */}
              {/* </FcLikePlaceholder> */}
              {type === "mine" && (
                <>
                  <button
                    class="btn btn-success"
                    onClick={() => setShowForm(true)}
                  >
                    {showForm && <UpdateArtist />} Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => handleSubmit(event)}
                  >
                    <FcFullTrash></FcFullTrash>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;

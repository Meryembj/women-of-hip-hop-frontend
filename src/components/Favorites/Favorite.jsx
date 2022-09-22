import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// COMPONENTS
import { FcLike } from "react-icons/fc";
import ArtistCard from "../Artists/ArtistCard";

const API_URL = "https://women-of-hip-hop.herokuapp.com/favorites";

const Favorite = ({ favoriteId, artist, setRefresh, size }) => {
  const [favorites, setFavorites] = useState([]);

  const deleteFromFavorites = (event) => {
    event.preventDefault();
    axios.delete(`${API_URL}/${favoriteId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
      .then((response) => {
        if (setRefresh)
          setRefresh(true);
      });
  };
  
  const addToFavorite = () => {
    axios.post(API_URL, { artist_id: artist._id },
        { headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        setFavorites(response.data);
      });
  };

  if (!artist)
    return(<></>);
  return (
    <div>
      <button id='bootstrap-override'
              className="btn btn-warning" onClick={addToFavorite}>
        <FcLike size={size} />
      </button>
      {favoriteId &&
       <button className="btn btn-danger" onClick={deleteFromFavorites}>
         Delete
       </button>}
    </div>
  );
};

export default Favorite;

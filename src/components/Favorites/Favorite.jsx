import React from "react";
import { FcLike } from "react-icons/fc";
import axios from "axios";

import { useState, useEffect } from "react";

const API_URL = "https://women-of-hip-hop.herokuapp.com/favorites";

const Favorite = ({ artistId }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorite = () => {
    axios
      .post(
        API_URL,
        { artist_id: artistId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log("response.data", response.data);
        setFavorites(response.data);
      });
  };

  return (
    <div className="album">
      <FcLike onClick={addToFavorite}></FcLike>
    </div>
  );
};

export default Favorite;

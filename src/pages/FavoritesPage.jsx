import { useState, useEffect } from "react";
import axios from "axios";
import Favorite from "../components/Favorites/Favorite";
import ArtistCard from "../components/Artists/ArtistCard";

const API_URL = "https://women-of-hip-hop.herokuapp.com/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log("response.data", response.data);
        setFavorites(response.data);
      });
  }, []);

  return (
    <div>
      <h3>List of favorites</h3>
      <ul style={{ listStyle: "none" }}>
        {favorites.map((favorite) => {
          return (
            <li key={favorite._id}>
              <ArtistCard type="all" artist={favorite}/>
              {/* <Artist /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;

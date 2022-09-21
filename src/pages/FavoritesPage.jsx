import { useState, useEffect } from "react";
import axios from "axios";
import Favorite from "../components/Favorites/Favorite";
import Artist from "../components/AllArtists/ArtistCard";

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
              <Artist
                name={favorite.artist_id.name}
                picture={favorite.artist_id.picture}
                miniBio={favorite.artist_id.miniBio}
                flagSong={favorite.artist_id.flagSong}
              />
              {/* <Artist /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;

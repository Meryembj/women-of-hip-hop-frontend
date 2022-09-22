import { useState, useEffect } from "react";
import axios from "axios";
import ArtistCard from "../components/Artists/ArtistCard";

const API_URL = "https://women-of-hip-hop.herokuapp.com/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setFavorites(response.data);
        setRefresh(false);
      });
  }, [refresh]);

  return (
    <div>
      <h3>List of favorites</h3>
      <ul style={{ listStyle: "none" }}>
        {favorites.map((favorite) => {
          return (
            <li key={favorite._id}>
              <ArtistCard artist={favorite.artist_id} type={favorite._id} setRefresh={setRefresh}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;

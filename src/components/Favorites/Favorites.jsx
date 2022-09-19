import { useState, useEffect } from "react";
import axios from "axios";
import Favorite from "./Favorite";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/favorites", {
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
      <ul>
        {favorites.map((favorite) => {
          console.log("Hello", favorite);

          return (
            <li>
              <Favorite userId={favorite.userID} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;

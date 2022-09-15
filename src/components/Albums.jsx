// src/pages/ApartmentsPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import Album from "./Album";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/albums")
      .then((response) => {
        console.log("response.data", response.data);
        setAlbums(response.data);
      });
  }, []);

  return (
    <div>
      <h3>List of albums</h3>
      <ul>
        {albums.map((album) => {
          console.log('Hello',album);

          return (
            <li>
              <Album {...album} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Albums;

import { useState, useEffect } from "react";
import axios from "axios";
import Album from "./Album";
import "./Albums.css";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/albums", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
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
          return (
            <li key={album._id}>
              <Album
                name={album.name}
                picture={album.picture}
                artist={album.artist}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Albums;
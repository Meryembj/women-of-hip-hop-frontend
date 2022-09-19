import { useState, useEffect } from "react";
import axios from "axios";
import Album from "./Album";
import Navbar from "../Navbar";
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
      <Navbar />
      <h3>List of albums</h3>
      <div>
        {albums.map((album) => {
          return (
            <div key={album._id}>
              <Album
                name={album.name}
                picture={album.picture}
                artist={album.artist}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Albums;

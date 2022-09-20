import { useState, useEffect } from "react";
import axios from "axios";
import MyAlbum from "../components/MyAlbums/MyAlbumCard";
import Navbar from "../components/Navbar";

function MyAlbums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/albums/myAlbums", {
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
    <>
      <Navbar />
      <div>
        <h3>All the albums you created</h3>
        <ul>
          {albums.map((album) => {
            return (
              <div key={album._id}>
                <MyAlbum
                  name={album.name}
                  picture={album.picture}
                  songs={album.songs}
                  artist={album.artist.name}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MyAlbums;

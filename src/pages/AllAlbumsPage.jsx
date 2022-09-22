import { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../components/Albums/AlbumCard";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setAlbums(response.data);
      });
  }, []);

  return (
    <>
      <h3>List of albums</h3>
      <div>
        {albums.map((album) => {
          return <AlbumCard key={album._id} album={album} type="all" />;
        })}
      </div>
    </>
  );
}

export default Albums;

import { useState, useEffect } from "react";
import axios from "axios";
import AlbumDetails from "../components/Albums/AlbumDetails";
import { useParams } from "react-router-dom";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

function AlbumDetailsPage() {
  const [album, setAlbum] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/find/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log("response.data", response.data);
        setAlbum(response.data);
      });
  }, [id]);

  return (
    <div>
      <AlbumDetails
        name={album.name}
        picture={album.picture}
        songs={album.songs}
        album={album}
      />
    </div>
  );
}

export default AlbumDetailsPage;

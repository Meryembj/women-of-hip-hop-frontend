import { useState, useEffect } from "react";
import axios from "axios";
import AlbumDetails from "../components/Albums/AlbumDetails";
import { useParams, useNavigate } from "react-router-dom";
import { FcLeft } from "react-icons/fc";


const API_URL = "https://women-of-hip-hop.herokuapp.com/albums";

function AlbumDetailsPage() {
  const [album, setAlbum] = useState([]);
  const navigate = useNavigate();

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
      <FcLeft onClick={() => navigate(-1)}>Go back</FcLeft>

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

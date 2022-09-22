import { useState, useEffect } from "react";
import axios from "axios";
import AlbumCard from "../components/Albums/AlbumCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = "https://women-of-hip-hop.herokuapp.com/albums/myAlbums";

function MyAlbums() {
  const [albums, setAlbums] = useState([]);
  const [refresh, setRefresh] = useState(true);


  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setAlbums(response.data);
        setRefresh(false);
        navigate("/myAlbums");
      });
  }, [refresh]);
  return (
    <>
      <div>
        <h3>All the albums you created</h3>
        <Link to="/createAlbum">
          <button className="btn btn-success">Create a new album</button>
        </Link>
        <ul>
          {albums.map((album) => {
            return (
              <AlbumCard
                key={album._id}
                album={album}
                type="mine"
                setRefresh={setRefresh}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MyAlbums;

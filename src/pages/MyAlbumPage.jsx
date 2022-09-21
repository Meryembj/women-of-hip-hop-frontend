import { useState, useEffect } from "react";
import axios from "axios";
import MyAlbum from "../components/MyAlbums/MyAlbumCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MyAlbums() {
  const [albums, setAlbums] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/albums/myAlbums", {
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
          <button>Create a new album</button>
        </Link>
        <ul>
          {albums.map((album) => {
            return (
              <div key={album._id}>
                <MyAlbum
                  name={album.name}
                  picture={album.picture}
                  songs={album.songs}
                  artist={album.artist.name}
                  album={album}
                  setRefresh={setRefresh}
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

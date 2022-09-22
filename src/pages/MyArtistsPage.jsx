import { useState, useEffect } from "react";
import axios from "axios";
import ArtistCard from "../components/Artists/ArtistCard";
import { Link } from "react-router-dom";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists/myArtists";

function MyArtists() {
  const [artists, setArtists] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setArtists(response.data);
        setRefresh(false);
      });
  }, [refresh]);
  return (
    <>
      <div>
        <h3>All the artists you created</h3>
        <Link to="/createArtist">
          <button className="btn btn-success">Create a new artist</button>
        </Link>
        {artists.map((artist) => {
          return (
            <ArtistCard key={artist._id} artist={artist} type="mine"
              setRefresh={setRefresh} />
          );
        })}
      </div>
    </>
  );
}

export default MyArtists;

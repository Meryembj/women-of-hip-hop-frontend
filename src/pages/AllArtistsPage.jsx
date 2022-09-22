import { useState, useEffect } from "react";
import axios from "axios";
import ArtistCard from "../components/Artists/ArtistCard";

const API_URL = "https://women-of-hip-hop.herokuapp.com/artists";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setArtists(response.data.artists);
      });
  }, []);

  return (
    <>
      <h3>List of Artists</h3>
      <div>
        {artists.map((artist) => {
          return <ArtistCard key={artist._id} artist={artist} type="all" />;
        })}
      </div>
    </>
  );
}

export default Artists;

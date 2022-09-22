import { useState, useEffect } from "react";
import axios from "axios";
import ArtistCard from "../components/Artists/ArtistCard";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/artists", {
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
          return (
            <ArtistCard key={artist._id}
                        artist={artist}
                        type="all"/>
          );
        })}
      </div>
    </>
  );
}

export default Artists;

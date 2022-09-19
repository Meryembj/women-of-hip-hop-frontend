import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "./Artist";
import Navbar from "../Navbar";

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
        console.log("response.data", response.data);
        setArtists(response.data.artists);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h3>List of Artists</h3>
      <div>
        {artists.map((artist) => {
          return (
            <div key={artist._id}>
              <Artist
                name={artist.name}
                picture={artist.picture}
                miniBio={artist.miniBio}
                flagSong={artist.flagSong}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Artists;

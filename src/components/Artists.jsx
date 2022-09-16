import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "./Artist";

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
      <h3>List of albums</h3>
      <ul>
        {artists.map((artist) => {
          return (
            <li key={artist._id}>
              <Artist
                name={artist.name}
                picture={artist.picture}
                miniBio={artist.miniBio}
                flagSong={artist.flagSong}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Artists;

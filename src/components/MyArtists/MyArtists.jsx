import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "../AllArtists/Artist";
import Navbar from "../Navbar";

function MyArtists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/artists/myArtists", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        console.log("response.data", response.data);
        setArtists(response.data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <h3>All the artists you created</h3>
      <ul>
        {artists.map((artist) => {
          return (
            <div key={artist._id}>
              <Artist
                name={artist.name}
                picture={artist.picture}
                flagSong={artist.flagSong}
                miniBio={artist.miniBio}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default MyArtists;

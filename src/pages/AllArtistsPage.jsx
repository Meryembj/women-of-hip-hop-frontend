import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "../components/AllArtists/ArtistCard";
import Favorite from "../components/Favorites/Favorite";
//import Navbar from "../components/Navbar";

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
      <div>
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
                <Favorite artistId={artist._id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Artists;

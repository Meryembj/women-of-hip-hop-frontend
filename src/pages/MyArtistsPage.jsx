import { useState, useEffect } from "react";
import axios from "axios";
import MyArtistCard from "../components/MyArtists/MyArtistCard";
import Navbar from "../components/Navbar";

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
    <>
      <div>
        <h3>All the artists you created</h3>
        {artists.map((artist) => {
          return (
            <div key={artist._id}>
              <MyArtistCard
                name={artist.name}
                picture={artist.picture}
                miniBio={artist.miniBio}
                flagSong={artist.flagSong}
                artist={artist}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyArtists;

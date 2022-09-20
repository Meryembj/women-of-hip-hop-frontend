import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "../AllArtists/Artist";
import MyArtist from "./MyArtist";
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
    <>
    <Navbar />
    <div>
      {artists.map((artist) => {
        return (
          <div key={artist._id}>
            <MyArtist
              name={artist.name}
              picture={artist.picture}
              miniBio={artist.miniBio}
              flagSong={artist.flagSong}
            />
          </div>
        );
      })}
    </div>
    </>
  );
}

export default MyArtists;

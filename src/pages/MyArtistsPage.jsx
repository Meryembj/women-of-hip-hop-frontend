import { useState, useEffect } from "react";
import axios from "axios";
import MyArtistCard from "../components/MyArtists/MyArtistCard";
import { Link } from "react-router-dom";

function MyArtists() {
  const [artists, setArtists] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    axios
      .get("https://women-of-hip-hop.herokuapp.com/artists/myArtists", {
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
          <button>Create a new artist</button>
        </Link>
        {artists.map((artist) => {
          return (
            <div key={artist._id}>
              <MyArtistCard
                name={artist.name}
                picture={artist.picture}
                miniBio={artist.miniBio}
                flagSong={artist.flagSong}
                artist={artist}
                setRefresh={setRefresh}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MyArtists;

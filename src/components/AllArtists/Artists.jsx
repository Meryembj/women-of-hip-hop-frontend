import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";

import axios from "axios";
import Artist from "./Artist";
import Navbar from "../Navbar";

function Artists() {
  const [artists, setArtists] = useState([]);

  const navigate = useNavigate();


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
    <>
      <Navbar />
      <div>
        <BsArrowBarLeft onClick={() => navigate(-1)}></BsArrowBarLeft>
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
    </>
  );
}

export default Artists;

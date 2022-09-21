import '../components/styles/PageCard.css';
import './styles/Shuffle.css';
import axios from 'axios';

import { useState } from 'react';
import YouTube from 'react-youtube';

// COMPONENTS
import Navbar from '../components/Navbar';
import { TbArrowsShuffle } from 'react-icons/tb';

const API_URL = 'https://women-of-hip-hop.herokuapp.com/artists/shuffle';


function Shuffle(props) {
  const [ artist, setArtist ] = useState();
  
  const getRandomArtist = () => {
    axios.get(`${API_URL}`, { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}`}})
      .then(response => {
        const randomArtist = response.data; 
        setArtist({
          ...randomArtist,
          flagSong: randomArtist.flagSong.includes('www.youtube.com') ?
            randomArtist.flagSong : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'});
      });
  };

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      loop: 1
    }
  };

  return (
    <>
      <div id="shuffleMain">
        <div className='userActionsContainer'>
          {!artist && <h1 className="cool post-click">Click to discover a random artist</h1>}
          {artist && <h1 className="cool pre-click">Go again</h1>}
          <button id='shuffle' className={!artist ? 'pre-click' : 'post-click'}
                  onClick={() => getRandomArtist()}>
            <TbArrowsShuffle size={70}/>
          </button>
        </div>
        {artist && <div className="randomArtist">
                     <div className="info">
                       <img alt={artist.name} src={artist.picture}/>
                       <h2>{artist.name}</h2>
                       <p>{artist.miniBio}</p>
                     </div>
                     <YouTube className="flagsong" opts={videoOptions}
                              videoId={artist.flagSong.match(/watch\?v=(.*?)(&|$)/)[1]}/>
                   </div>}
      </div>
    </>
  );
}

export default Shuffle;

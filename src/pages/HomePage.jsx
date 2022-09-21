import '../components/styles/PageCard.css';
import './styles/Home.css';
import { useContext } from 'react';
import shuffleImg from './styles/shuffle.png';
import heartImg from './styles/heart.png';
import artistImg from './styles/artist.png';
import albumImg from './styles/album.png';

// CONTEXT
import { AuthContext } from '../context/auth.context';

// COMPONENTS
import Navbar from '../components/Navbar';
import PageCard from '../components/PageCard.jsx';


function Home(props) {
  const { user } = useContext(AuthContext);
  return (
    <div className="homeBody">
      <p className="intro">Use our database of female Hip-Hop artists to discover new artists, listen to and save your favorite ones, and promote their relevance on the scene.<br/>
        <span className='cool'>For a mature audience !</span></p>
      <div className="cardsContainer">
        <PageCard pageName='Shuffle' path='shuffle'
                  pageDescription='Discover an artist at random!'
                  pageThumbnail={shuffleImg} />
        <PageCard pageName='Your Favorites' path='favorites'
                  pageDescription='See and edit your favorite artists.'
                  pageThumbnail={heartImg}/>
        <PageCard pageName='All Artists' path='artists'
                  pageDescription='Get a list of all the artists on our database.'
                  pageThumbnail={artistImg} />
      </div>
      <div className="cardsContainer">
        <PageCard pageName='All Albums' path='albums'
                  pageDescription='Get a list of all the artists on our database.'
                  pageThumbnail={albumImg}/>
        <PageCard pageName='Profile' path='profile'
                  pageDescription='See and edit your collections and manage your account.'
                  pageThumbnail={user.picture} />
      </div>
    </div>
  );
}

export default Home;
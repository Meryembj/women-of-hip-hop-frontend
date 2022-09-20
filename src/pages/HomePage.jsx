import '../components/styles/PageCard.css';
import './styles/Home.css';
import { useContext } from 'react'; 

// CONTEXT
import { AuthContext } from '../context/auth.context';

// COMPONENTS
import Navbar from '../components/Navbar';
import PageCard from '../components/PageCard.jsx';


function Home(props) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="homeBody">
        <p className="intro">Use our database of female Hip-Hop artists to discover new artists, listen to and save your favorite ones, and promote their relevance on the scene.<br/>
          <span className='cool'>For a mature audience !</span></p>
        <div className="cardsContainer">
          <PageCard pageName='Shuffle' path='shuffle'
                    pageDescription='Discover an artist at random!'
                    pageThumbnail='https://cdn-icons-png.flaticon.com/512/3580/3580329.png' />
          <PageCard pageName='Your Favorites' path='favorites'
                    pageDescription='See and edit your favorite artists.'
                    pageThumbnail='https://nypost.com/wp-content/uploads/sites/2/2016/09/rihannafur.jpg?quality=75&strip=all'/>
          <PageCard pageName='All Artists' path='artists'
                    pageDescription='Get a list of all the artists on our database.'
                    pageThumbnail='https://pictures.squarespace-cdn.com/content/v1/5127db07e4b043d5dffeb39b/1450668190349-MU7PEG8705WPIYGXDD1W/picture-asset.jpeg' />
        </div>
        <div className="cardsContainer">
          <PageCard pageName='All Albums' path='albums'
                    pageDescription='Get a list of all the artists on our database.'
                    pageThumbnail='https://e.snmc.io/i/600/w/438060b5ef8f47b62f4da00bef22acb9/8668847/meryl-quarantaine-Cover-Art.jpg'/>
          <PageCard pageName='Profile' path='profile'
                    pageDescription='See and edit your collections and manage your account.'
                    pageThumbnail={user.picture} />
        </div>
      </div>
    </>
  );
}

export default Home;
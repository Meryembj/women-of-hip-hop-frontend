import { useContext } from 'react'; 
import { Link } from 'react-router-dom';

// CONTEXT
import { AuthContext } from '../context/auth.context';

// COMPONENTS
import Navbar from '../components/Navbar';



function Home(props) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="main">
        <p>Use our database of female Hip-Hop artists to discover new artists, listen to and save your favorite ones, and promote their relevance on the scene.
          For a mature audience !</p>
        <div className="cardsContainer">
          {/* CARDS */}
        </div>
      </div>
    </>
  );
}

export default Home;
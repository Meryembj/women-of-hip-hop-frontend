import './styles/Profile.css';
import { useState, useContext } from "react"; 
import heartImg from './styles/images/heart.png';
import artistImg from './styles/images/artist.png';
import albumImg from './styles/images/album.png';

// CONTEXT
import { AuthContext } from "../context/auth.context";

// COMPONENTS
import Navbar from "../components/Navbar";
import PageCard from "../components/PageCard";
import ChangePasswordForm from "../components/AccountActionsForms/ChangePasswordForm";
import ChangePictureForm from "../components/AccountActionsForms/ChangePictureForm";
import DeleteAccountForm from "../components/AccountActionsForms/DeleteAccountForm";

function Profile(props) {
  const { user } = useContext(AuthContext);
  const [ active, setActive ] = useState(0);
  
  return (
    <div id="profileBody">
      <div className="cardsContainer">
        <PageCard pageName="Your Favorites" path="/favorites"
                  pageDescription="See and edit your favorite artists."
                  pageThumbnail={heartImg} />
        <PageCard pageName="Your albums" path="/myAlbums"
                  pageDescription="See, add, and manage the albums you've imported."
                  pageThumbnail={albumImg} />
        <PageCard pageName="Your artists" path="/myArtists"
                  pageDescription="See, add, and manage the artists you've imported."
                  pageThumbnail={artistImg} />
      </div>
      <div className="accountSettings">
        <ul className="accountActions">
          <h1><img id="you" alt="you" src={user.picture}/>Account Settings</h1>
          <li>
            <button className="action" onClick={() => setActive(active !== 1 ? 1 : 0)}>
              Change your password</button>
          </li>
          <li>
            <button className="action" onClick={() => setActive(active !== 2 ? 2 : 0)}>
              Change your profile picture</button>
          </li>
          <li>
            <button className="action" onClick={() => setActive(active !== 3 ? 3 : 0)}>
              Delete your account</button>
          </li>
        </ul>
        <div className="forms">
          {active === 1 && <ChangePasswordForm />}
          {active === 2 && <ChangePictureForm />}
          {active === 3 && <DeleteAccountForm />}
        </div>
      </div>
    </div>
  );
}

export default Profile;

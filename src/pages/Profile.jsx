import './style/Profile.css';
import { useState, useContext } from "react"; 

// CONTEXT
import { AuthContext } from "../context/auth.context";

// COMPONENTS
import Navbar from "../components/Navbar";
import PageCard from "../components/PageCard";
import ChangePasswordForm from "../components/accountActionsForms/ChangePasswordForm";
import ChangePictureForm from "../components/accountActionsForms/ChangePictureForm";
import DeleteAccountForm from "../components/accountActionsForms/DeleteAccountForm";

function Profile(props) {
  const { user } = useContext(AuthContext);
  const [ active, setActive ] = useState(0);
  
  return (
    <>
      <Navbar />
      <div className="profileBody">
        <div className="cardsContainer">
          <PageCard pageName="Your Favorites" path="/favorites"
                    pageDescription="See and edit your favorite artists."
                    pageThumbnail="https://nypost.com/wp-content/uploads/sites/2/2016/09/rihannafur.jpg?quality=75&strip=all"/>
          <PageCard pageName="Your albums" path="/myAlbums"
                    pageDescription="See and manage the albums you've imported."
                    pageThumbnail="" />
          <PageCard pageName="Your artists" path="/myArtists"
                    pageDescription="See and manage the artists you've imported."
                    pageThumbnail="" />
        </div>
        <div className="accountSettings">
          <h1> <img className="you" alt="you" src={user.image}/>
            Account Settings</h1>
          <ul className="accountActions">
            <li className="action">
              <button onClick={() => setActive(active !== 1 ? 1 : 0)}>
                Change your password</button>
              {active === 1 && <ChangePasswordForm />}
            </li>
            <li className="action">
              <button  onClick={() => setActive(active !== 2 ? 2 : 0)}>
                Change your profile picture</button>
              {active === 2 && <ChangePictureForm />}
            </li>
            <li className="action">
              <button  onClick={() => setActive(active !== 3 ? 3 : 0)}>
                Delete your account</button>
              {active === 3 && <DeleteAccountForm />}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;

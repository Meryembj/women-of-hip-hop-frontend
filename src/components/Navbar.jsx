import './styles/Navbar.css';

// CONTEXT
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

// COMPONENTS
import { BsArrowBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { logOutUser, user } = useContext(AuthContext);
  return (
    <div id='Navbar'>
      <Link to="/"><h1 className='navHome'>WOHH</h1></Link>
      <div className='userOptions'>
        <Link to="/profile">
          <button>Profile <img alt="profile" src={user.picture}/></button>
        </Link>
        <button id='nav-log-out' onClick={logOutUser}>
          Log out <BsArrowBarRight />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

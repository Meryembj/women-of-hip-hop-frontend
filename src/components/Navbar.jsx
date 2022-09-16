import { useContext } from "react";
import { Link } from 'react-router-dom';

// CONTEXT
import { AuthContext } from "../context/auth.context";

// COMPONENTS
import { BsArrowBarRight } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';

function Navbar(props) {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <div className='Navbar'>
      <Link to="/"><h1>WOHH</h1></Link>
      <div className='userOptions'>
        <Link to="/profile">
          <button><span>Profile <IoPersonOutline /></span></button>
        </Link>
        <button onClick={logOutUser}>
          <span>Log out <BsArrowBarRight /></span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

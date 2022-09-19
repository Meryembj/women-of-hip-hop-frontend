import { useContext } from 'react'; 

import Navbar from '../components/Navbar';

import { AuthContext } from '../context/auth.context';

function Profile(props) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <h1>Hello {user.username}! ur logged in.</h1>
      <img width='200px' alt="" src={user.image}/>
    </>
  );
}

export default Profile;

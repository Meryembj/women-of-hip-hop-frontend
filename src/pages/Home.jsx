import { useContext } from 'react'; 

import Navbar from '../components/Navbar';

import { AuthContext } from '../context/auth.context';



function Home(props) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <h1>Hello {user.username}! ur logged in.</h1>
      <img width='100px' alt="" src={user.image}/>
    </>
  );
}

export default Home;
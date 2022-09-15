import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react'; 

// CONTEXT
import { AuthContext } from './context/auth.context';

// COMPONENTS
// components imports here

// PAGES
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';


function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className='App'>

      <Routes>
        {!isLoggedIn && <Route path='/' element={<LandingPage />}/>}
        {isLoggedIn && <Route path='/' element={<HomePage />}/>}
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import shuffleImage from './pages/styles/shuffle.png';
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

// CONTEXT
import { AuthContext } from "./context/auth.context";

// COMPONENTS
import ProtectedRoute from "./components/ProtectedRoute";

// PAGES
import LandingPage from "./pages/LandingPage";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import Albums from "./pages/AllAlbumsPage";
import Artists from "./pages/AllArtistsPage";
import Favorites from "./pages/FavoritesPage";
import NewAlbum from "./pages/CreateAlbumPage";
import NewArtist from "./pages/CreateArtistPage";
import MyAlbums from "./pages/MyAlbumPage";
import MyArtists from "./pages/MyArtistsPage";
import ShufflePage from "./pages/ShufflePage";
import AlbumDetailsPage from "./pages/AlbumDetails";


function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && <Route path="/" element={<LandingPage />} />}
        {isLoggedIn && <Route path="/" element={<Home />} />}
        <Route path='/' element={<ProtectedRoute />}>
          <Route path="/albums" element={<Albums />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/myAlbums" element={<MyAlbums />} />
          <Route path="/createAlbum" element={<NewAlbum />} />
          <Route path="/myArtists" element={<MyArtists />} />
          <Route path="/createArtist" element={<NewArtist />} />
          <Route path="/shuffle" element={<ShufflePage shuffleImg={shuffleImage}/>} />
         <Route path="/albums/:id" element={<AlbumDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

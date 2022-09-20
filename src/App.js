import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

// CONTEXT
import { AuthContext } from "./context/auth.context";

// COMPONENTS
import Albums from "./pages/AllAlbumsPage";
import Artists from "./pages/AllArtistsPage";
import Favorites from "./pages/FavoritesPage";
import NewAlbum from "./pages/CreateAlbumPage";
import NewArtist from "./pages/CreateArtistPage";
import MyAlbums from "./pages/MyAlbumPage";
import MyArtists from "./pages/MyArtistsPage";

// PAGES
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/LayoutPage";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import { BsNewspaper } from "react-icons/bs";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && <Route path="/" element={<LandingPage />} />}
        {isLoggedIn && <Route path="/" element={<Home />} />}
        <Route path="/albums" element={<Albums />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/myAlbums" element={<MyAlbums />} />
        <Route path="/createAlbum" element={<NewAlbum />} />
        <Route path="/myArtists" element={<MyArtists />} />
        <Route path="/createArtist" element={<NewArtist />} />
      </Routes>
    </div>
  );
}

export default App;

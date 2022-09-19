import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

// CONTEXT
import { AuthContext } from "./context/auth.context";

// COMPONENTS
import Albums from "./components/AllAlbums/Albums";
import Artists from "./components/AllArtists/Artists";
import Favorites from "./components/Favorites/Favorites";
import NewAlbum from "./components/MyAlbums/CreateAlbum";
import NewArtist from "./components/MyArtists/CreateArtist";
import MyAlbums from "./components/MyAlbums/MyAlbums";
import MyArtists from "./components/MyArtists/MyArtists";

// PAGES
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
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

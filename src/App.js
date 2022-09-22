import "./App.css";
import shuffleImage from "./pages/styles/images/shuffle.png";
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
import Shuffle from "./pages/ShufflePage";
import NotFound from "./pages/NotFoundPage";

import Albums from "./pages/AllAlbumsPage";
import NewAlbum from "./pages/CreateAlbumPage";
import MyAlbums from "./pages/MyAlbumPage";
import AlbumDetailsPage from "./pages/AlbumDetails";

import Artists from "./pages/AllArtistsPage";
import NewArtist from "./pages/CreateArtistPage";
import MyArtists from "./pages/MyArtistsPage";

import Favorites from "./pages/FavoritesPage";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && <Route path="/" element={<LandingPage />} />}

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shuffle" element={<Shuffle shuffleImg={shuffleImage}/>} />

          <Route path="/albums" element={<Albums />} />
          <Route path="/myAlbums" element={<MyAlbums />} />
          <Route path="/createAlbum" element={<NewAlbum />} />
          <Route path="/albums/:id" element={<AlbumDetailsPage />} />

          <Route path="/artists" element={<Artists />} />
          <Route path="/myArtists" element={<MyArtists />} />
          <Route path="/createArtist" element={<NewArtist />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

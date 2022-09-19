import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

// CONTEXT
import { AuthContext } from "./context/auth.context";

// COMPONENTS
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Favorites from "./components/Favorites";

// PAGES
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

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
      </Routes>
    </div>
  );
}

export default App;

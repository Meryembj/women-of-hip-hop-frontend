import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

// CONTEXT
import { AuthContext } from "./context/auth.context";

// COMPONENTS
// components imports here

// PAGES
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Favorites from "./components/Favorites";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Routes>
          {!isLoggedIn && <Route path="/" element={<LandingPage />} />}
          {isLoggedIn && <Route path="/" element={<Home />} />}
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

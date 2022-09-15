import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Albums from "./components/Albums";
// COMPONENTS
// components imports here

// PAGES
// pages imports here

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route  path="/albums"  element={<Albums />} />
      </Route>
    </Routes>
  </div>
  );
}

export default App;

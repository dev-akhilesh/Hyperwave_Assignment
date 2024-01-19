import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Musicplayer from "./pages/Musicplayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<Musicplayer />} />
    </Routes>
  )
}

export default App

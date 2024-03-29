import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/index.js'
import { Lore } from './Pages/Lore/index.js'
import { Navigation } from './Components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rules } from './Pages/Rules/index.js';
import { Map } from './Pages/Map/index.js';
import { Deaths } from './Pages/Deaths';
import { HowToStart } from "./Pages/HowToStart"
import { CharacterCreation } from "./Pages/CharacterCreation"
import { Footer } from "./Components/Footer"
import { Enemies } from "./Pages/Enemies"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CharacterCreation" element={<CharacterCreation />} />
            <Route exact path="/Lore" element={<Lore />} />
            <Route exact path="/Rules" element={<Rules />} />
            <Route exact path="/Deaths" element={<Deaths />} />
            <Route exact path="/HowToStart" element={<HowToStart />} />
            <Route exact path="/Enemies" element={<Enemies />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </header>


    </div>
  );
}

export default App;

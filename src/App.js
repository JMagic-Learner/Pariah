import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/index.js'
import Lore from './Pages/Lore/index.js'
import Navigation from './Components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rules from './Pages/Rules/index.js';
import Map from './Pages/Map/index.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Lore" element={<Lore />} />
            <Route exact path="/Rules" element={<Rules />} />
            <Route exact path="/Map" element={<Map/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

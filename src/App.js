// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/index.js";
import { Factions } from "./Pages/Factions/index.js";
import { Navigation } from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rules } from "./Pages/Rules/index.js";
import { Footer } from "./Components/Footer/index.js";
import { RulesBook } from "./Pages/RulesBook/index.js";
import { PilotSheet } from "./Pages/PilotSheet/index.js";

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons/css/tachyons.min.css"
      ></link>
      <header className="bg-near-white">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Factions" element={<Factions />} />
            <Route exact path="/RulesBook" element={<RulesBook />} />
            <Route exact path="/PilotSheet" element={<PilotSheet />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

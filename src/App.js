// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/index.js";
import { Factions } from "./Pages/Factions/index.js";
import { Navigation } from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rules } from "./Pages/Rules/index.js";
import { Footer } from "./Components/Footer/index.js";
import { Chapter1 } from "./Pages/Chapter1/index.js";
import { Chapter2 } from "./Pages/Chapter2/index.js";
import { Chapter3 } from "./Pages/Chapter3/index.js";
import { Chapter4 } from "./Pages/Chapter4/index.js";

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
            <Route exact path="/Rules" element={<Rules />} />
            <Route exact path="/chapter1" element={<Chapter1 />} />
            <Route exact path="/chapter2" element={<Chapter2 />} />
            <Route exact path="/chapter3" element={<Chapter3 />} />
            <Route exact path="/chapter4" element={<Chapter4 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

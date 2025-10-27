// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/index.js";
import { Gallery } from "./Pages/Gallery/index.js";
import { Navigation } from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rules } from "./Pages/Rules/index.js";
import { Footer } from "./Components/Footer/index.js";

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
            <Route exact path="/Gallery" element={<Gallery />} />
            <Route exact path="/Rules" element={<Rules />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

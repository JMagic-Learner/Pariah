// import logo from "./logo.svg";
import "./App.css";
// import { Home } from "./Pages/Home/index.js";
import { Navigation } from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PilotSheetProvider } from "./context/PilotSheetContext";
import { Footer } from "./Components/Footer/index.js";
import { RulesBook } from "./Pages/RulesBook/index.js";
import { PilotSheet } from "./Pages/PilotSheet/index.js";
import { ForceLists } from "./Pages/ForceLists/index.js";
import { Contact } from "./Pages/Contact/index.js";
import { Gallery } from "./Pages/Gallery/index.js";
import { Links } from "./Pages/Links/index.js";
import { PrintCards } from "./Pages/PrintCards/index.js";

function App() {
  return (
    <div className="App">
      <header className="bg-near-white">
        <BrowserRouter>
          <PilotSheetProvider>
            <Navigation />
            <Routes>
              {/* <Route exact path="/" element={<Home />} /> */}
              <Route exact path="/" element={<RulesBook />} />
              <Route exact path="/PilotSheet" element={<PilotSheet />} />
              <Route exact path="/ForceLists" element={<ForceLists />} />
              <Route exact path="/Gallery" element={<Gallery />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Links" element={<Links />} />
              <Route exact path="/PrintCards" element={<PrintCards />} />
            </Routes>
            <Footer />
          </PilotSheetProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

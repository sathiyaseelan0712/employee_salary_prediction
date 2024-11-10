// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dataset from "./pages/DataOverview";
import Prediction from "./pages/Prediction";
import Correlation from "./pages/Correlation";
import About from "./pages/About";
import Bg from "./images/bg6.jpg";
import "./App.css";
function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url(${Bg})` }}
    >
       {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
      <Router>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dataset />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/correlation" element={<Correlation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

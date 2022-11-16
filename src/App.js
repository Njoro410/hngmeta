import Navbar from "./components/Navbar";
import AirBnB from "./pages/AirBnB";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlaceToStay from "./pages/PlaceToStay";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<AirBnB />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

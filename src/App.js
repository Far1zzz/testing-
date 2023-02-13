import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import VisiMisi from "./pages/VisiMisi/VisiMisi";
import Program from "./pages/Program/Program";

function App() {
  Aos.init({ duration: 2000 });
  Aos.refresh();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/program-gerakan" element={<Program />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Footer from "./components/common/Footer";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

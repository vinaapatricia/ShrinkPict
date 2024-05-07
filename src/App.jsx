import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CompressImage from "./pages/CompressImage"
import CompressAudio from "./pages/CompressAudio"

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/CompressImage" element={<CompressImage/>}></Route>
        <Route path="/CompressAudio" element={<CompressAudio/>}></Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;

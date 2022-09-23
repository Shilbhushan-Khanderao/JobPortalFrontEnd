import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;

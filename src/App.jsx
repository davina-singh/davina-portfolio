import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <header>
      <h1>Davina's Portfolio</h1>
      <div id="nav">
        <Link to="/home">Home </Link>
        <Link to="/about">About </Link>
      </div>
    </header>

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

    <footer>
      <p>&copy; Davina Singh</p>
    </footer>
    </BrowserRouter>
    </>
  );
}

export default App;

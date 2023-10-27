import './App.css';
import './pages/Home';
import './pages/About';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <header>
      <h1>Davina's Portfolio</h1>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
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

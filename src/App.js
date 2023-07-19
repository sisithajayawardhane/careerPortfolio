import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./pages/Navbar";
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import Education from './pages/Education';
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

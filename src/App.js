import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Highlights from './components/Highlights';
import Education from './components/Education';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/highlights" element={<Highlights/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;

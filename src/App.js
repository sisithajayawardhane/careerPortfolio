import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;

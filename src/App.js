import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/profile" component={Profile} />
        </Routes>

      </Suspense>

    </div>
  );
}

export default App;

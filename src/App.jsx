// src/App.jsx
import React from 'react';
import './App.css';
import AnimatedBackground from './Components/AnimatedBackground';
import ComingSoonCard from './Components/ComingSoonCard';

function App() {
  return (
    <div className="main-wrapper">
      {/* <AnimatedBackground /> */}
      <main className="content-container">
        <ComingSoonCard />
      </main>
    </div>
  );
}

export default App;

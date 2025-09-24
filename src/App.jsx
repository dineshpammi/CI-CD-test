import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './home';
import About from './about';

function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />

      {/* Example second route */}
      <Route path="/about" element={<About />} />

      {/* Fallback (optional) */}
      <Route path="*" element={<Home />} />
    </Routes>)
}

export default App

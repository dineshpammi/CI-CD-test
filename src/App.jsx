import { Routes, Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import './App.css'
import Test from './TEST'

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/test">Test</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

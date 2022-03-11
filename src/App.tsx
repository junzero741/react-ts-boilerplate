import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <div style={{height: '300px'}}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  )
}
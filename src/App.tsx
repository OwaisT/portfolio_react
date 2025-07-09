// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import MainLayout from './layouts/MainLayout'
// import About from './pages/About' // Later

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  )
}

export default App

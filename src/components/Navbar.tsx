// src/components/Navbar.tsx
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white shadow p-4 flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link> {/* future-proofing */}
        </nav>
  )
}

export default Navbar
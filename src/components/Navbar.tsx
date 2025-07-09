// src/components/Navbar.tsx
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-brand.png'

const Navbar = () => {
    return (
        <nav className="bg-[#600439] text-[#ffffff] shadow p-2 px-6 flex gap-6 items-center">
            <Link to="/">
                <img src={logo} className="w-15 h-15" alt="Logo" />
            </Link>
            <h2 className="text-4xl font-bold">Owais BATAVIA</h2>
        </nav>
  )
}

export default Navbar
// src/components/Navbar.tsx
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo-brand.png'

const Navbar = () => {
    return (
        <nav className="w-full z-50 border-b border-[#080469] bg-[rgba(6,4,66,0.8)] backdrop-blur-md fixed text-[#ffffff] shadow p-2 px-6 flex gap-6 items-center">
            <Link to="/">
                <img src={logo} className="min-w-[65px] max-w-[65px] min-h-[65px] max-h-[65px]" alt="Logo" />
            </Link>
            <h2 className="text-4xl font-bold">Owais BATAVIA</h2>
        </nav>
  )
}

export default Navbar
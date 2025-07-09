import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#600439] bg-opacity-10 text-[#ffffff]">
        <Outlet />
      </main>
      <footer className="text-center p-4 bg-gray-200">
        &copy; {new Date().getFullYear()} Owais R B
      </footer>
    </>
  )
}

export default MainLayout
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="text-center p-4 bg-gray-200 ">
        &copy; {new Date().getFullYear()} Owais R B
      </footer>
    </>
  )
}

export default MainLayout
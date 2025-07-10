import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { useSlideInStagger } from '@/hooks/useSlideInStagger';

const MainLayout = () => {
    // Custom hook for staggered slide-in animations
    useSlideInStagger();

  return (
    <>
      <Navbar />
      <main className="bg-black text-[#ffffff]">
        <Outlet />
      </main>
      <footer className="h-40 p-4 border-t bg-[#060442] text-[#ffffff] border-[#080469]">
        <p className="text-xl">Owais R B</p>
      </footer>
    </>
  )
}

export default MainLayout
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { useSlideInStagger } from '@/hooks/useSlideInStagger';
import { useMagnify } from '@/hooks/useMagnify';
import { useWave } from '@/hooks/useWave';

/**
 * @returns Maint layout component that includes the Navbar, main content area, and a footer.
 * TThe layout to be used all around the website.
 */
const MainLayout = () => {
    // Custom hook for staggered slide-in animations
    useSlideInStagger();
    // Custom hook for magnification effect
    useMagnify();
    // Custom hook for wave animation effect
    useWave();

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
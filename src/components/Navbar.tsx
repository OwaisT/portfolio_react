// src/components/Navbar.tsx
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import logo from '@/assets/images/logo-brand.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Navbar component that changes styles on scroll
 * Uses GSAP for scroll-triggered animations
 * This component is fixed at the top of the viewport, transparent and changes its background and border color on scroll
 */
const Navbar = () => {
    const navRef = useRef<HTMLElement>(null);

    // Use GSAP to create a scroll-triggered animation for the navbar
    useGSAP(() => {
        if (!navRef.current) return;
        const nav = navRef.current;
        const scrollTrigger = ScrollTrigger.create({
            start: "top+=1 top",
            trigger: nav,
            onEnter: () => {
                nav.classList.add("border-[#080469]", "bg-[rgba(6,4,66,0.8)]");
                nav.classList.remove("border-transparent", "bg-transparent");
            },
            onLeaveBack: () => {
                nav.classList.remove("border-[#080469]", "bg-[rgba(6,4,66,0.8)]");
                nav.classList.add("border-transparent", "bg-transparent");
            }
        });
        return () => {
            scrollTrigger.kill();
        };
    }, []);

    return (
        <nav ref={navRef} className="fixed flex duration-500 gap-6 items-center w-full z-50 p-2 px-6 text-[#ffffff] backdrop-blur-md border-b border-transparent bg-transparent">
            <Link to="/">
                <img src={logo} className="min-w-[65px] max-w-[65px] min-h-[65px] max-h-[65px]" alt="Logo" />
            </Link>
            <h2 className="text-4xl font-bold">Owais BATAVIA</h2>
        </nav>
  )
}

export default Navbar
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register Scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to apply staggered slide-in animations to elements
 * One parent element (variable: sections, class: "slide-ins-staggered") 
 * with multiple child elements (variable: targets class: "slide-in-stagger")
 */
export const useSlideInStagger = () => {
    useGSAP(() => {
        // Select all elements with parent class "slide-ins-staggered"
        const sections = document.querySelectorAll(".slide-ins-staggered");
        console.log("[GSAP] Found sections:", sections);

        // Collect all child elements and apply animation on them
        sections.forEach((section) => {
            const targets = section.querySelectorAll(".slide-in-stagger");
            console.log("[GSAP] Section:", section, "Targets:", targets);
            
            // Apply gsap animation to each element to be animated with one staggered over other within parent
            gsap.from(targets, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // More reliable for most layouts
                    toggleActions: "play none none none",
                },
                x: -200,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                stagger: 0.2,
            });
        });
        setTimeout(() => ScrollTrigger.refresh(), 100); // Ensure refresh after render
    }, []);
};

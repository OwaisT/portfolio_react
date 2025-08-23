import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useMagnify = () => {
   useGSAP(() => {
        const targets = document.querySelectorAll(".magnify");
        gsap.to(targets, {
            scale: 3,
            scrollTrigger: {
                trigger: ".magnify-items-container",
                start: "top top",
                end: "bottom top",
                scrub: true,
                toggleActions: "play none none none"
            }
        });
    }, []);
}
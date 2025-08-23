import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useWave = () => {
    useGSAP(() => {
        const targets = document.querySelectorAll(".wave");
        gsap.to(targets, {
            y: -50, // amplitude
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.1, // delay between each dot
                repeat: -1,
                yoyo: true,
            },
            duration: 1.5,
        });
    }, []);
}

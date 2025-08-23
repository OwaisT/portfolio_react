import React from "react";
import Accordion from "@/components/Accordion";
import { aboutMeData } from "./data";
import profileImg from "@/assets/images/about_image.jpg";

const About: React.FC = () => {
	return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                <div className="flex justify-center h-fit">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-[220px] h-[220px] object-cover rounded-full shadow-[0_2px_16px_rgba(0,0,0,0.12)]"
                    />
                </div>
                <Accordion items={aboutMeData} />
            </div>
        </div>

	);
};

export default About;

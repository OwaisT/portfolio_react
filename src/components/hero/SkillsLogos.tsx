import reactLogo from "@/assets/images/platforms/react.svg";
import nextLogo from "@/assets/images/platforms/next.svg";
import tsLogo from "@/assets/images/platforms/typescript.svg";
import pythonLogo from "@/assets/images/platforms/python.svg";
import flaskLogo from "@/assets/images/platforms/flask.svg";
import jsLogo from "@/assets/images/platforms/javascript.svg";
import wordpressLogo from "@/assets/images/platforms/wordpress.svg";

const SkillsLogos = () => {
    return (
        <div id="skills-logos" className="flex mt-6 space-x-4 magnify">
            <img src={reactLogo} alt="React Logo" className="w-7 h-7 md:w-15 md:h-15 wave" />
            <img src={nextLogo} alt="Next.js Logo" className="w-7 h-7 md:w-15 md:h-15 wave" />
            <img src={tsLogo} alt="TypeScript Logo" className="w-7 h-7 md:w-15 md:h-15 wave" />
            <img src={pythonLogo} alt="Python Logo" className="w-7 h-7 md:w-15 md:h-15 wave" />
            <img src={flaskLogo} alt="Flask Logo" className="w-7 h-7 md:w-15 md:h-15 wave" />
            <img src={jsLogo} alt="JavaScript Logo" className="w-7 h-7 md:w-15 md:h-15 wave" />
            <img src={wordpressLogo} alt="WordPress Logo" className="w-7 h-7 md:w-15 md:h-15 wave" />
        </div>
    );
};

export default SkillsLogos;

const TestLogos = () => {
    return (
        <div id="skills-logos-test" className="flex mt-6 space-x-4">
            <img src={reactLogo} alt="React Logo" className="magnify w-45 h-45" />
            <img src={nextLogo} alt="Next.js Logo" className="w-45 h-45" />
            <img src={tsLogo} alt="TypeScript Logo" className="w-45 h-45" />
            <img src={pythonLogo} alt="Python Logo" className="w-45 h-45" />
            <img src={flaskLogo} alt="Flask Logo" className="w-45 h-45" />
            <img src={jsLogo} alt="JavaScript Logo" className="w-45 h-45" />
            <img src={wordpressLogo} alt="WordPress Logo" className="w-45 h-45" />
        </div>
    );
};

export {TestLogos}

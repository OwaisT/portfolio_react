// Hero component with ambient gradient effect for the main page
const Hero = () => {
    
    return (
        <div className="relative min-h-screen bg-[#030221] overflow-hidden slide-ins-staggered">
            {/* Left blurred radial */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                className="absolute top-1/2 left-[30%] w-[800px] h-[800px] rounded-full"
                style={{
                    background:
                    "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 90%)",
                    filter: "blur(100px)",
                    transform: "translate(-50%, -50%)",
                }}
                />
            </div>

            {/* Right blurred radial */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                className="absolute top-1/2 left-[70%] w-[700px] h-[700px] rounded-full"
                style={{
                    background:
                    "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 90%)",
                    filter: "blur(100px)",
                    transform: "translate(-50%, -50%)",
                }}
                />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
                <h1 className="max-w-lg text-3xl font-extrabold leading-tight slide-in-stagger">
                    Créer des projets numériques qui comptent
                </h1>
                <p className="mt-6 max-w-md text-lg text-gray-300 slide-in-stagger">
                    Mes compétences et réalisations au service de votre équipe.
                </p>
            </div>
        </div>
    )

}

export default Hero;
import ProjectCard from "@/components/ProjectCard";

/**
 * ProjectCardsDisplay displays the a list of project cards with a heading
 * The data given is a list of data for each card.
 */

// Define the type for the list of cards
export type ProjectCardProps = {
    image: string;
    imgAlt: string;
    head: string;
    desc: Array<{ label: string; text: string }>;
    link: string;
    btnTxt: string;
};

interface ProjectCardsDisplayProps {
    cards: ProjectCardProps[];
    heading: string;
}

const ProjectCardsDisplay = ({ cards, heading } : ProjectCardsDisplayProps) => {

    return (
        <div className="gap-4 flex flex-col items-center pb-4 slide-ins-staggered">
            <h2 className="text-3xl font-bold slide-in-stagger">{heading}</h2>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {cards.map((card, idx) => (
                    <ProjectCard key={idx} {...card} />
                ))}
            </div>
        </div>
    );
};

export default ProjectCardsDisplay;

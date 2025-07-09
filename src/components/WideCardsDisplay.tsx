import React from "react";
import WideCard from "@/components/WideCard";

// Define the type for the list of cards
export type WideCardProps = {
    image: string;
    imgAlt: string;
    head: string;
    desc: string;
    link: string;
};

interface WideCardsDisplayProps {
    cards: WideCardProps[];
    heading: string;
}

const WideCardsDisplay: React.FC<WideCardsDisplayProps> = ({ cards, heading }) => {
    return (
        <div className="gap-4 flex flex-col items-center pb-4">
            <h2 className="text-3xl font-bold" >{heading}</h2>
            {cards.map((card, idx) => (
                <WideCard key={idx} {...card} />
            ))}
        </div>
    );
};

export default WideCardsDisplay;

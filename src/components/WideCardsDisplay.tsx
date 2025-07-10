import React, { useRef } from "react";
import WideCard from "@/components/WideCard";
import { useSlideInStagger } from "@/hooks/useSlideInStagger";

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

const WideCardsDisplay = ({ cards, heading } : WideCardsDisplayProps) => {

    return (
        <div className="gap-4 flex flex-col items-center pb-4 slide-ins-staggered">
            <h2 className="text-3xl font-bold slide-in-stagger">{heading}</h2>
            {cards.map((card, idx) => (
                <WideCard key={idx} {...card} />
            ))}
        </div>
    );
};

export default WideCardsDisplay;

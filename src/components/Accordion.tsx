import React, { useState } from "react";

type AccordionItem = {
	heading: string;
	description: string;
};

type AccordionProps = {
	items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="accordion-container">
			{items.map((item, idx) => (
				<div key={idx} className="accordion-item">
					<button
						className="accordion-heading"
						onClick={() => handleToggle(idx)}
						aria-expanded={openIndex === idx}
					>
						{item.heading}
					</button>
					{openIndex === idx && (
						<div className="accordion-description">
							{item.description}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;

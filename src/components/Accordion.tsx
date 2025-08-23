import React, { useState } from "react";

type AccordionItem = {
	heading: string;
	description: string;
};

type AccordionProps = {
	items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

       return (
	       <div className="flex flex-col ml-4 md:w-[50%] gap-2">
		       {items.map((item, idx) => (
			       <div key={idx} className={`pb-2 ml-2 mr-2 ${idx === items.length - 1 ? "" : "border-b border-gray-200"}`}>
				       <button className=""
					       onClick={() => handleToggle(idx)}
					       aria-expanded={openIndex === idx}
                        >
					       {item.heading}
					       <span className={`ml-2 inline-block transition-transform ${openIndex === idx ? "rotate-180" : "rotate-0"} duration-200`}>
						       ▼
					       </span>
				       </button>
				       <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-min opacity-100" : "max-h-0 opacity-0"}`}>
					       <div className="pt-2 text-justify">
						       {item.description}
					       </div>
				       </div>
			       </div>
		       ))}
	       </div>
       );
};

export default Accordion;

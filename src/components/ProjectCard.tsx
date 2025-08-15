/**
 * ProjectCard component with image, text & buttons
 * The text contains a heading, description and links towards site & git
 * The data is passed as props for reuseability.
 * 
 */
type Props = {
    image: string;
    imgAlt: string;
    head: string;
    desc: string;
    link: string;
    btnTxt: string;
};

const WideCard = ({ image, imgAlt, head, desc, link, btnTxt } : Props ) => {
    return (
        <div className="flex mx-4 mb-2 flex-col md:w-[30%] border border-[#080469] items-center gap-8 bg-[#060442] p-8 rounded-xl slide-in-stagger" >
            <img src={image} alt={imgAlt} className="bg-white rounded-xl min-w-[100%] aspect-video object-cover" />
            <div className="text-justify flex flex-col items-center gap-3">
                <h3 className="text-2xl font-bold">{head}</h3>
                <p className="text-lg">{desc}</p>
                <a href={link} target="_blank" rel="noreferrer noopener" className="w-max border p-2 rounded-xl hover:bg-white hover:text-[#060442] duration-400">{btnTxt}</a>
            </div>
        </div>
    )
}

export default WideCard;
/**
 * WideCard component with image on left and text on right
 * The text on right contains a heading, description and a link
 * It is called wide card because it is horizontally longer that it is tall.
 * On mobile, it is not horizontally longer, but that is responsive design.
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
        <div className="flex mx-4 mb-2 flex-col md:flex-row border border-[#080469] items-center gap-8 md:w-300 md:h-[300px] bg-[#060442] p-8 rounded-xl slide-in-stagger" >
            <img src={image} alt={imgAlt} className="bg-white rounded-xl min-w-[100%] aspect-video md:min-w-[35%] md:max-w-[35%] object-cover" />
            <div className="text-justify flex flex-col items-center md:items-start gap-3">
                <h3 className="text-2xl font-bold">{head}</h3>
                <p className="text-lg">{desc}</p>
                <a href={link} target="_blank" rel="noreferrer noopener" className="w-max border p-2 rounded-xl hover:bg-white hover:text-[#060442] duration-400">{btnTxt}</a>
            </div>
        </div>
    )
}

export default WideCard;
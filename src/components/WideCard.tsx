type Props = {
    image: string;
    imgAlt: string;
    head: string;
    desc: string;
    link: string;
};

const WideCard = ({ image, imgAlt, head, desc, link } : Props ) => {
    return (
        <div>
            <img src={image} alt={imgAlt} />
            <div>
                <h3 className="text-2xl font-bold">{head}</h3>
                <p className="text-gray-700">{desc}</p>
                <a href={link} className="text-blue-500 hover:underline">View Project</a>
            </div>
        </div>
    )
}

export default WideCard;
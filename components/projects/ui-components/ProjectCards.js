import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
    const cardData = [
        {
            Title: "The Pitahaya",
            Description: "A Travel, Tech and Lifestyle blog built using Next.js, Tailwind CSS and Strapi.",
            Link: "https://www.thepitahaya.com"
        },
        {
            Title: "PitahayaSwap",
            Description: "A basic ERC20 token swap Decentralised Application built using Next.js, Tailwind CSS and Solidity.",
            Link: "https://www.thepitahaya.com"
        }
    ];

    return (
        <div className="flex flex-col justify-between gap-10 w-auto overflow-visible">
            {cardData && cardData.map((card) => (
                <ProjectCard key={card.Title} title={card.Title} description={card.Description} Link />
            ))}
        </div>
    );
}

export default ProjectCards;

import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
    const cardData = [
        {
            Title: "The Pitahaya",
            Description: "A Travel, Tech and Lifestyle blog built using Next.js, Tailwind CSS and Strapi.",
            Link: "https://www.thepitahaya.com",
            ButtonText: "Visit Site"
        },
        {
            Title: "PitahayaSwap",
            Description: "A basic ERC20 token swap Decentralised Application built using Next.js, Tailwind CSS and Solidity.",
            Link: "",
            ButtonText: "WIP"

        }
    ];

    return (
        <div className="flex flex-col justify-between gap-10 w-auto xl:h-auto  xl:w-1/2 2xl:w-full">
            {cardData && cardData.map((card) => (
                <ProjectCard key={card.Title} title={card.Title} description={card.Description} link={card.Link} buttonText={card.ButtonText} />
            ))}
        </div>
    );
}

export default ProjectCards;

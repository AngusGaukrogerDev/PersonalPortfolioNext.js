import ButtonExternalLink from "@/components/shared/ButtonExternalLink";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="w-full gap-3 h-full flex flex-col justify-center items-start">
    
    <h3>{title}</h3>    
    <h4 className="text-anti-flash_white ">{description}</h4>
    <ButtonExternalLink
    destinationLink={link}
    buttonText={"Visit Site"}
    solidColour={true}
    />

     
    </div>
  );
};
export default ProjectCard;

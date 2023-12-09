import ProjectCards from "./ui-components/ProjectCards";
import ProjectsText from "./ui-components/ProjectsText";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-auto px-5 py-10 bg-rich_black flex flex-col justify-center items-start lg:items-center gap-3  md:h-screen md:gap-5 xl:flex-row xl:justify-evenly  xl:px-48 xl:py-32">
      <ProjectsText />
      <ProjectCards />
    </div>
  );
};
export default Projects;

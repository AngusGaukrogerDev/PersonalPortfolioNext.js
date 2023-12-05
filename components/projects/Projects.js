import ProjectCards from "./ui-components/ProjectCards";
import ProjectsText from "./ui-components/ProjectsText";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen px-5 py-10 bg-rich_black flex flex-col justify-center items-start gap-3 md:gap-5  xl:px-48 xl:py-32">
      <ProjectsText />
      <ProjectCards />
    </div>
  );
};
export default Projects;

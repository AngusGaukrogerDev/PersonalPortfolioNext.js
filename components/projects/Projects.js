import ProjectCards from "./ui-components/ProjectCards";
import ProjectsText from "./ui-components/ProjectsText";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-screen px-5 py-10 bg-rich_black flex flex-col justify-evenly items-start gap-3  xl:px-48 xl:py-32">
      <ProjectsText />
      <ProjectCards />
    </div>
  );
};
export default Projects;

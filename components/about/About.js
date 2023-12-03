import AboutImageWithShapes from "./ui-components/AboutImageWithShapes";
import AboutText from "./ui-components/AboutText";

const About = () => {
    return(
        <div id="about" className="top-0 w-full h-screen bg-rich_black gap-10 px-5 py-10 flex flex-col justify-center items-center">
            <AboutText />
            <AboutImageWithShapes />
        </div>
    );
}
export default About;
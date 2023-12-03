import AboutImageWithShapes from "./ui-components/AboutImageWithShapes";
import AboutText from "./ui-components/AboutText";

const About = () => {
    return(
        <div id="about" className="w-full h-auto bg-rich_black gap-5 px-5 py-10 flex flex-col justify-center items-center">
            <AboutText />
            <AboutImageWithShapes />
        </div>
    );
}
export default About;
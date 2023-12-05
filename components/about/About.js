import AboutImageWithShapes from "./ui-components/AboutImageWithShapes";
import AboutText from "./ui-components/AboutText";

const About = () => {
    return(
        <div id="about" className="top-0 w-full h-screen bg-rich_black gap-10 px-5 py-10 flex flex-col md:flex-row justify-center items-center">
            <AboutText />
            <div className="md:w-1/2 md:flex md:flex-col md:items-end justify-end">
            <AboutImageWithShapes />

            </div>
        </div>
    );
}
export default About;
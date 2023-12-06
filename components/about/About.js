import AboutImageWithShapes from "./ui-components/AboutImageWithShapes";
import AboutText from "./ui-components/AboutText";

const About = () => {
    return(
        <div id="about" className="top-0 w-full h-screen sm:h-auto md:h-screen bg-rich_black gap-10 px-5 py-10 flex flex-col md:flex-row justify-center items-center">
            <AboutText />
            <div className="md:w-1/2 ">
            <AboutImageWithShapes />

            </div>
        </div>
    );
}
export default About;
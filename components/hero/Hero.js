import Title from "./ui-components/Title";
import BackgroundImage from "./ui-components/BackgroundImage";

const Hero = () => {
    return(
        <div className="hero-section bg-contain md:bg-cover lg:bg-cover xl:bg-cover 2xl:bg-cover z-0">
            <BackgroundImage />
            {/* Your Hero Section Content Goes Here */}
            <div className="absolute bottom-0 z-99">
               <Title />
            </div>
      </div>
    );
}
export default Hero;
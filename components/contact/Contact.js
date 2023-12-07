import ContactForm from "./ui-components/ContactForm";
import ContactImage from "./ui-components/ContactImage";
import ContactText from "./ui-components/ContactText";

const Contact = () => {
    return(
        <div id="contact" className="w-full h-auto  bg-rich_black flex flex-col-reverse  justify-center items-center  gap-3 px-5 py-10 lg:h-screen lg:flex-row lg:justify-evenly lg:mb-32 xl:px-48 xl:py-32">
            <div className="w-full gap-5 lg:w-1/2 md:h-screen md:flex md:flex-col md:justify-center  md:items-start">
                <ContactForm />
            </div>
            <div className="w-full lg:h-full lg:w-1/2 lg:flex lg:items-center lg:justify-center lg:scale-[1.4] lg:z-10 overflow-hidden">
                <ContactImage />
            </div>
        </div>
    );
}
export default Contact;
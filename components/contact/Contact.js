import ContactForm from "./ui-components/ContactForm";
import ContactImage from "./ui-components/ContactImage";
import ContactText from "./ui-components/ContactText";

const Contact = () => {
    return(
        <div id="contact" className="w-full h-auto bg-rich_black flex flex-col justify-center items-start gap-3 px-5 py-10 md:flex-row md:justify-evenly xl:px-48 xl:py-32">
            <div className="md:w-1/2">
            <ContactText />
            <ContactForm />
            </div>

            <ContactImage />
        </div>
    );
}
export default Contact;
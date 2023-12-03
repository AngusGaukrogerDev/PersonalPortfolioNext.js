import ContactForm from "./ui-components/ContactForm";
import ContactText from "./ui-components/ContactText";

const Contact = () => {
    return(
        <div id="contact" className="w-full h-screen bg-rich_black flex flex-col justify-center items-start gap-3 px-5 py-10 xl:px-48 xl:py-32">
            <ContactText />
            <ContactForm />
        </div>
    );
}
export default Contact;
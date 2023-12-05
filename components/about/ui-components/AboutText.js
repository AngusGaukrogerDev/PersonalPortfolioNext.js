import ButtonExternalLink from "@/components/shared/ButtonExternalLink";

const AboutText = () => {

    return(
        <div className="flex flex-col justify-center items-start gap-3 bg-rich_black md:w-1/2 md:px-4 md:gap-5 2xl:px-48 xl:py-32">
            <h2>About</h2>
            <h4 className="text-anti-flash_white">Experienced Software Developer adept in bringing forth expertise in the design, testing and maintenance of software systems.</h4>
            <ButtonExternalLink
            buttonText={"My CV"}
            destinationLink={"https://www.pitahayalabs.com"}
            />
        </div>
    );
}
export default AboutText;
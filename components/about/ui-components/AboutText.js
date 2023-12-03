import Button from "@/components/shared/Button";

const AboutText = () => {

    return(
        <div className="flex flex-col justify-center items-start gap-3  bg-rich_black  xl:px-48 xl:py-32">
            <h2>About</h2>
            <h3>Experienced Software Developer adept in bringing forth expertise in the design, testing and maintenance of software systems</h3>
            <Button
            buttonText={"My CV"}
            />
        </div>
    );
}
export default AboutText;
import ButtonExternalLink from "@/components/shared/ButtonExternalLink";

const PitahayaLabsText = () => {
    return(
        <div className="h-full md:w-full gap-3 flex flex-col justify-center items-start">
            <h2>Pitahaya Labs</h2>
            <h3>My Professional Web Development Services Business</h3>
            <p>In September 2023 I founded Pitahaya Labs - A Web Development Business specialising in professional contracting services.</p>
            <ButtonExternalLink 
            buttonText={"Visit Site"}
            destinationLink={"https://www.pitahayalabs.com/"}
            solidColour={true}
            />
        </div>
    );
}
export default PitahayaLabsText;
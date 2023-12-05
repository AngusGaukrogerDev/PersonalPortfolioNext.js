import ButtonExternalLink from "@/components/shared/ButtonExternalLink";

const PitahayaLabsText = () => {
    return(
        <div className="h-full md:w-full gap-3 flex flex-col justify-start items-start md:gap-5 lg:flex-row ">
            
            <h2>Pitahaya Labs</h2>
            
            <div className="flex flex-col gap-3 md:gap-5">
                <h3>My Professional Web Development Services Business</h3>
                <p>In September 2023 I founded Pitahaya Labs - A Web Development Business specialising in professional contracting services.</p>
                <ButtonExternalLink 
                buttonText={"Visit Site"}
                destinationLink={"https://www.pitahayalabs.com/"}
                solidColour={true}
                />
            </div>
        </div>
    );
}
export default PitahayaLabsText;
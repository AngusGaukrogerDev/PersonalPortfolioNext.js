import ButtonExternalLink from "@/components/shared/ButtonExternalLink";

const PitahayaLabsText = () => {
    return(
        <div className="h-full md:w-full gap-3 flex flex-col justify-start items-start md:gap-5 xl:gap-14 xl:flex-row xl:justify-evenly xl:items-center 2xl:gap-3">
            <div className="xl:w-1/2 xl:flex xl:flex-col xl:justify-center 2xl:w-full">
                <h2>Pitahaya Labs</h2>

            </div>
            
            <div className="flex flex-col gap-3 md:gap-5 xl:w-full xl:h-auto 2xl:w-full">
                <h3 className="text-anti-flash_white">My Professional Web Development Services Business</h3>
                <p >In September 2023 I founded Pitahaya Labs - A Web Development Business specialising in professional contracting services.</p>
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
import Button from "@/components/shared/Button";

const PitahayaLabsText = () => {
    return(
        <div className="h-full gap-3 flex flex-col justify-center items-start">
            <h2>Pitahaya Labs</h2>
            <h3>My Professional Web Development Services Business</h3>
            <p>In September 2023 I founded Pitahaya Labs - A Web Development Business specialising in professional contracting services.</p>
            <Button 
            buttonText={"Visit Site"}
            solidColour={true}
            />
        </div>
    );
}
export default PitahayaLabsText;
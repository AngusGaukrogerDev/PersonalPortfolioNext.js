import Links from "../shared/Links";

const NavigationScreen = () => {
    return(
        <div className="w-full h-screen bg-rich_black flex flex-col justify-center items-start gap-10 px-5">
            <h2 className="hover:text-lime">Home</h2>
            <h2 className="hover:text-lime">About</h2>
            <h2 className="hover:text-lime">Pitahaya Labs</h2>
            <h2 className="hover:text-lime">Projects</h2>
            <h2 className="hover:text-lime">Contact</h2>
            <Links />
        </div>
    );
}
export default NavigationScreen;
import Link from "next/link";

const Footer = () => {
    return(
        <Link href={"/"} className="w-full h-12 mt-5 mb-10 flex flex-col justify-center items-center">
            <h4 className="text-anti-flash_white">© Angus Gaukroger - {new Date().getFullYear()} </h4> 
        </Link>
    );
}
export default Footer;
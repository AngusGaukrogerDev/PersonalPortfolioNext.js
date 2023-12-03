import Links from "../shared/Links";
import Link from "next/link";
const NavigationScreen = ({onSelectItem}) => {
  return (
    <div className="fixed w-full h-screen bg-rich_black flex flex-col justify-center items-start gap-10 px-5 z-[98] xl:gap-0 xl:px-48 xl:py-32">
      <Link onClick={onSelectItem} href={"/"} as={"/"}>
        <h2 className="hover:text-lime">Home</h2>
      </Link>
      <Link onClick={onSelectItem} href={"/#about"} as={"/#about"}>
        <h2 className="hover:text-lime">About</h2>
      </Link>
      <Link onClick={onSelectItem} href={"/#pitahayalabs"} as={"/#pitahayalabs"}>
        <h2 className="hover:text-lime">Pitahaya Labs</h2>
      </Link>
      <Link onClick={onSelectItem} href={"/#projects"} as={"/#projects"}>
        <h2 className="hover:text-lime">Projects</h2>
      </Link>
      <Link onClick={onSelectItem} href={"/#contact"} as={"/#contact"}>
        <h2 className="hover:text-lime">Contact</h2>
      </Link>
      <Links onSelectExternal={onSelectItem} />
    </div>
  );
};
export default NavigationScreen;

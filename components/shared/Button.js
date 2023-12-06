import Link from "next/link";

const Button = ({ buttonText, solidColour, destinationLink }) => {
  return (
    <Link
      href={destinationLink}
      className={`flex flex-row justify-center items-center px-2 py-4 gap-2 w-40 h-14 border-2 sm:w-44 sm:h-18md:gap-1 md:w-52 md:h-24 md:py-1 md:px-2 lg:h-24 xl:w-64 xl:h-16 xl:py-10 hover:cursor-pointer ${
        solidColour
          ? "fill-rich_black stroke-rich_black hover:stroke-anti-flash_white hover:fill-anti-flash_white bg-lime border-lime text-rich_black hover:bg-rich_black hover:border-lime hover:text-anti-flash_white"
          : "fill-anti-flash_white stroke-anti-flash_white hover:stroke-rich_black hover:fill-rich_black bg-none  text-anti-flash_white border-anti-flash_white  hover:bg-anti-flash_white hover:border-anti-flash_white hover:text-rich_black"
      }`}
    >
      <h4>{buttonText}</h4>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
       
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9706 1.02944C18.9706 0.477153 18.5228 0.0294376 17.9706 0.0294376H8.97056C8.41828 0.0294376 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944H16.9706V10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294V1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
        />
      </svg>

    </Link>
  );
};
export default Button;

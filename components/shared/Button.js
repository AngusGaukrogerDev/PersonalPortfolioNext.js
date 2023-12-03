const Button = ({ buttonText, solidColour }) => {
  return (
    <button
      className={`flex flex-row justify-center items-center w-28 h-9 xl:w-64 xl:h-16 xl:py-10 ${
        solidColour ? "bg-lime text-rich_black" : "bg-none text-anti-flash_white"
      }`}
    >
      <h4>{buttonText}</h4>
    </button>
  );
};
export default Button;

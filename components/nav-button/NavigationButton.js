'use client' 
import { useState } from "react";
import NavigationScreen from "../navigation-screen/NavigationScreen";

const NavigationButton = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    <div className="fixed bg-none top-3 right-3 z-[103] md:scale-[1.75] md:top-10 md:right-10 lg:scale-[2] lg:top-10 lg:right-10">
      <button onClick={handleToggleMenu}>
        {openMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 15 15"
            className="fill-anti-flash_white hover:fill-lime"
          >
            <path
              
              d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            className="fill-anti-flash_white hover:fill-lime"
          >
            <path
              
              fill-rule="evenodd"
              d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Zm0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
    {openMenu ? <NavigationScreen onSelectItem={handleToggleMenu} /> : <></>}
    </>
  );
};

export default NavigationButton;

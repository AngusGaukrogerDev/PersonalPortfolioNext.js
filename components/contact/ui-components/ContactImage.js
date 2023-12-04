const ContactImage = () => {
    return (
      <div className="w-full flex flex-col justify-center items-center relative scale-95 md:w-1/2 md:h-screen">
        <img className="z-10 absolute top-0 left-0 right-0 bottom-0 m-auto scale-95" src="/images/contact/football-img.png" />
        <div className="z-3 ">
            <svg
            width="479"
            height="497"
            viewBox="0 0 479 497"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-3 spinner"
            >
            <path
                d="M220.65 3.12475C232.901 -0.855989 246.099 -0.855988 258.35 3.12475L368.478 38.9075C380.729 42.8882 391.406 50.6453 398.978 61.067L467.041 154.747C474.613 165.169 478.691 177.72 478.691 190.602V306.398C478.691 319.28 474.613 331.831 467.041 342.253L398.978 435.933C391.406 446.355 380.729 454.112 368.478 458.093L258.35 493.875C246.099 497.856 232.901 497.856 220.65 493.875L110.522 458.093C98.2706 454.112 87.5939 446.355 80.022 435.933L11.9592 342.253C4.38743 331.831 0.30928 319.28 0.30928 306.398V190.602C0.30928 177.72 4.38743 165.169 11.9592 154.747L80.022 61.067C87.5939 50.6453 98.2706 42.8882 110.522 38.9075L220.65 3.12475Z"
                fill="#BCED09" className=""
            />
            </svg>
        </div>
        
      </div>
    );
  };
  
  export default ContactImage;
  
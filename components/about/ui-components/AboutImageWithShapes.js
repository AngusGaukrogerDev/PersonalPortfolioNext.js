import "@/styles/about/about.css"
const AboutImageWithShapes = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-3 ">
      <div> </div>
      <svg
        x="50"
        y="50"
        width="93"
        height="93"
        viewBox="0 0 93 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-3 floating3 self-start"
      >
        <path
          d="M92.4229 45.9613L46.9849 92.3682L0.577998 46.9302L46.016 0.523286L92.4229 45.9613Z"
          fill="#BCED09"
        />
      </svg>

      <div> </div>

      <div> </div>
      <img className="z-4 scale-[2.75] lg:scale-[2]" src="/images/about/GlacierNearHuarazPeru.png" />
      <svg
        width="65"
        height="66"
        viewBox="0 0 65 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-5 scale-110 floating"
      >
        <path
          d="M64.2323 19.1711L58.9241 59.5612L19.5561 65.6227L0.533614 28.9789L28.145 0.27022L64.2323 19.1711Z"
          fill="#BCED09"
        />
      </svg>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-5 scale-[1.5] justify-self-end self-start floating2"
      >
        <path
          d="M25.6506 61.9899C15.0208 59.3606 6.4414 51.5343 2.84933 41.19L2.28967 39.5783C-1.25913 29.3586 1.07143 18.0162 8.36235 10.0237V10.0237C15.6533 2.03127 26.7345 -1.32859 37.2363 1.26904L38.8925 1.6787C49.5224 4.308 58.1018 12.1343 61.6938 22.4786L62.2535 24.0903C65.8023 34.31 63.4717 45.6525 56.1808 53.6449V53.6449C48.8899 61.6374 37.8087 64.9972 27.3068 62.3996L25.6506 61.9899Z"
          fill="#BCED09"
        />
      </svg>

    </div>
  );
};
export default AboutImageWithShapes;

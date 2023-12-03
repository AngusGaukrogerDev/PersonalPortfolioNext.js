import "@/styles/hero/hero.css"

const BackgroundImage = ({ src }) => {
  return (
    <>
      {/* Large Desktop Background Image */}
      <div className="hidden md:hidden lg:hidden xl:hidden 2xl:block ">
        <img
          className="w-full h-screen object-cover object-top smooth-zoom"
          src="/images/hero/LARGE-DESKTOP.jpg"
          alt="Desktop Background"
        />
      </div>
      {/*  Desktop Background Image */}
      <div className="hidden md:hidden lg:block xl:block 2xl:hidden smooth-zoom">
        <img
          className="w-full h-screen object-cover object-top "
          src="/images/hero/DESKTOP.jpg"
          alt="Desktop Background"
        />
      </div>

      {/* Tablet Background Image */}
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden smooth-zoom">
        <img
          className="w-full h-screen object-cover object-top "
          src="/images/hero/LARGE-TABLET.jpg"
          alt="Desktop Background"
        />
      </div>
      {/* Tablet Background Image */}
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden smooth-zoom">
        <img
          className="w-full h-screen object-cover object-top "
          src="/images/hero/VERTICAL-TABLET.jpg"
          alt="Desktop Background"
        />
      </div>

      {/* Mobile Background Image */}
      <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden smooth-zoom">
        <img
          className="w-screen h-screen object-cover object-center"
          src="/images/hero/SMALL-MOBILE.jpg"
          alt="Mobile Background"
        />
      </div>
    </>
  );
};
export default BackgroundImage;

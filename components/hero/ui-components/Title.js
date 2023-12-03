import Button from "@/components/shared/Button";
const Title = () => {
  return (
    <div className="w-full h-screen flex flex-col item-start justify-end px-5 py-10 gap-3 xl:px-48 xl:py-32">
      <h1 className="">Angus Gaukroger</h1>
      <h3>Full-Stack Software Developer</h3>
      <div className="flex flex-row justify-start items-center gap-3">
        <Button
            buttonText={"Contact"}
            solidColour={true}
        />
        <Button 
            buttonText={"Learn More"}
            solidColour={false}
        />
      </div>
    </div>
  );
};
export default Title;

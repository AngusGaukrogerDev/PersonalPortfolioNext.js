import Button from "@/components/shared/Button";
const Title = () => {
  return (
    <div className="w-full h-screen flex flex-col item-start justify-end px-5 py-10 gap-2 xl:px-48 xl:py-32">
      <h1 className="">Angus Gaukroger</h1>
      <h2>Full-Stack Software Developer</h2>
      <div className="flex flex-row justify-start items-center gap-2">
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

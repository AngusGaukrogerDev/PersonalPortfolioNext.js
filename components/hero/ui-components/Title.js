import Button from "@/components/shared/Button";
const Title = () => {
  return (
    <div className="w-full h-auto flex flex-col item-start justify-end px-5 py-10 gap-3 md:gap-2 md:px-10 xl:px-48 xl:py-32">
      <h1>Angus Gaukroger</h1>
      <h3>Full-Stack Software Developer</h3>
      <div className="flex flex-row justify-start items-center gap-3">
        <Button
            destinationLink={"/#contact"}
            buttonText={"Contact"}
            solidColour={true}
        />
        <Button 
            destinationLink={"/"}
            buttonText={"Learn More"}
            solidColour={false}
        />
      </div>
    </div>
  );
};
export default Title;

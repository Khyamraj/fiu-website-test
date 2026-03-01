import Aside from "./aside";
import Hero from "./hero";

export default function Body() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-[95%] xs:w-[90%] sm:w-[85%] md:w-[80%] max-w-6xl mx-auto gap-8 lg:gap-12 ">
        <div className="flex-1">
          <Hero />
        </div>
        <div className="flex-none lg:w-1/3 w-full mt-8 lg:mt-0">
          <Aside />
        </div>
      </div>
    </>
  );
}
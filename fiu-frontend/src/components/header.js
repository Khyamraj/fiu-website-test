import Grammr from "./grammr";
import Logo from "./logo";


export default function Header() {
  return (
        
    <div className="flex flex-col w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-screen-xl h-auto mx-auto py-6 md:py-10  ">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full gap-4 sm:gap-0 min-h-[120px]">
        <div className="mb-4 sm:mb-0 flex justify-center sm:justify-start w-full sm:w-auto">
          <Logo />
        </div>
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <Grammr />
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <p className="text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 font-[Times] leading-tight">
          Granular Micromechanics Research Lab
        </p>
      </div>
    </div>
  );
}
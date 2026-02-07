import Grammr from "./grammr";
import Logo from "./logo";

export default function Header() {
  return (
    <>
      <div className=" flex flex-col w-[80%] h-[200px] mx-auto ">
        <div className="flex mx-auto justify-between h-[80%] px-20 items-center text-center w-full ">
          <Logo />
          <Grammr />
        </div>
        <div className="text-white flex justify-center items-center h-[20%]">
          <p className="text-middle text-3xl mb-10 font-bold text-yellow-500 font-[times] ">
            Granular Micro-Mechanics Research Lab
          </p>
        </div>
      </div>
    </>
  );
}

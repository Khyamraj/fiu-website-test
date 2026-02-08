export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-col md:flex-row w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto border-t border-black h-fit px-4 sm:px-10 lg:px-20  py-8 md:py-10 justify-evenly gap-8 md:gap-0 font-[sans-serif]">
          <div className="">
            <h1 className="text-lg sm:text-xl font-bold mb-3">SOCIAL MEDIA</h1>
            <p className="cursor-pointer hover:underline">Facebook</p>
            <p className="cursor-pointer hover:underline">Instagram</p>
            <p className="cursor-pointer hover:underline">Twitter (X)</p>
          </div>
          <div className="">
            <h1 className="text-lg sm:text-xl font-bold mb-3">LOCATION</h1>
            <p className="cursor-pointer">Grammr Lab</p>
            <p className="cursor-pointer">Florida International University</p>
            <p className="cursor-pointer">Miami</p>
          </div>
          <div className="">
            <h1 className="text-lg sm:text-xl font-bold mb-3" id="contact">CONTACT</h1>
            <div>
              <h2 className="cursor-pointer font-bold">Director</h2>
              <p className="cursor-pointer ml-2 text-sm">Prof. Anil Mishra</p>
              <p className="cursor-pointer ml-2 text-xs">( example@mail.com )</p>
            </div>
            <div className="mt-3">
              <h2 className="cursor-pointer font-bold">Co-Director</h2>
              <p className="cursor-pointer ml-2 text-sm">Prof. Seung Jae Lee</p>
              <p className="cursor-pointer ml-2 text-xs">( example@mail.com )</p>
            </div>
          </div>
        </div>
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto justify-center items-center flex border-t border-black py-2 text-xs sm:text-sm text-center">
          <p className="w-full">&copy; {new Date().getFullYear()} FIU GRAMMR Lab. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

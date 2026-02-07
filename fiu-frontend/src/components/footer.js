export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex w-[80%] mx-auto border-t-1 border-black h-fit px-20 py-10 justify-between  font-[sans-serif]">
          <div>
            <h1 className="text-xl font-bold mb-3">SOCIAL MEDIA</h1>
            <p className="cursor-pointer ">Facebook</p>
            <p className="cursor-pointer ">Instagram</p>
            <p className="cursor-pointer ">Twitter (X) </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-3">LOCATION</h1>
            <p className="cursor-pointer ">Grammr Lab</p>
            <p className="cursor-pointer ">Florida International University</p>
            <p className="cursor-pointer ">Miami</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-3 " id="contact">CONTACT</h1>
            <h2 className="cursor-pointer font-bold ">Director</h2>
            <p className="cursor-pointer mx-3 text-sm">Prof. Anil Mishra</p>
            <p className="cursor-pointer mx-3 text-xs">( example@mail.com )</p>
            <h2 className="cursor-pointer font-bold mt-3">Co-Director</h2>
            <p className="cursor-pointer  mx-3 text-sm ">Prof. Seung Jae Lee</p>
            <p className="cursor-pointer mx-3 text-xs">( example@mail.com )</p>

          </div>
        </div>
        <div className="w-[80%] mx-auto justify-center items-center flex  border-t-1 border-black  py-2  text-sm">
          <p>&copy; {new Date().getFullYear()} FIU GRAMMR Lab. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

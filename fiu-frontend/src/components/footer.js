export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-col md:flex-row w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto border-t border-black h-fit px-2 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10 justify-evenly gap-6 sm:gap-8 md:gap-0 font-[sans-serif]">
       
          <div className="w-full md:w-auto items-center flex-1 flex flex-col   sm:items-center md:items-start mb-4 md:mb-0">
            <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              SOCIAL MEDIA
            </h1>
            <ul className="space-y-1 text-sm">
              <li>
              LinkedIn: 
                <a
                  href="https://www.linkedin.com/in/anil-misra-9120b329b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:underline focus:underline outline-none"
                  tabIndex={0}
                >
                  {" "}Anil Misra, Ph.D., P.E.
                 
                </a>
              </li>
              <li>
              LinkedIn: 
                <a
                  href="https://www.linkedin.com/in/seung-jae-lee-ph-d?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:underline focus:underline outline-none"
                  tabIndex={0}
                >
                 {" "}Seung Jae Lee, Ph.D
                </a>
              </li>
              
            </ul>
          </div>

          <div className="w-full md:w-auto flex-1 flex flex-col items-center sm:items-center md:items-start mb-4 md:mb-0">
            <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-2 sm:mb-3">
              LOCATION
            </h1>
            <ul className="space-y-1 text-center text-sm md:text-start ">
              <li>
                <span className="cursor-pointer">Grammr Lab</span>
              </li>
              <li>
                <span className="cursor-pointer">
                  Florida International University
                </span>
              </li>
              <li>
                <span className="cursor-pointer">Miami</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-auto flex-1 flex flex-col items-center md:items-stretch">
            <h1
              className="text-lg sm:text-xl font-bold tracking-wide text-gray-800 text-center mb-3 mt-1"
              id="contact"
            >
              CONTACT
            </h1>
            <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 w-full">
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h2 className="text-base font-semibold text-gray-700 mb-1">Director</h2>
                <p className="text-sm font-medium text-gray-900">Anil Misra, Ph.D., P.E.</p>
                <span className="text-xs italic text-gray-600 mb-1">Chair & Professor</span>
                <div className="flex items-center text-xs gap-1">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <a
                    href="mailto:anmisra@fiu.edu"
                    className="hover:underline text-blue-600 outline-none"
                  >
                    anmisra@fiu.edu
                  </a>
                </div>
                <div className="flex items-center text-xs gap-1 mt-1">
                  <span className="font-semibold text-gray-700">Website:</span>
                  <a
                    href="https://myweb.fiu.edu/anmisra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600 outline-none"
                  >
                    Dr. Anil Misra
                  </a>
                </div>
              </div>
              <div className="hidden md:block self-stretch w-px bg-gray-200"></div>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h2 className="text-base font-semibold text-gray-700 mb-1">Co-Director</h2>
                <p className="text-sm font-medium text-gray-900">Seung Jae Lee, Ph.D</p>
                <span className="text-xs italic text-gray-600 mb-1">Undergraduate Program Director & Associate Professor</span>
                <div className="flex items-center text-xs gap-1">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <a
                    href="mailto:sjlee@fiu.edu"
                    className="hover:underline text-blue-600 outline-none"
                    tabIndex={0}
                  >
                    sjlee@fiu.edu
                  </a>
                </div>
                <div className="flex items-center text-xs gap-1 mt-1">
                  <span className="font-semibold text-gray-700">Website:</span>
                  <a
                    href="http://web.eng.fiu.edu/sjlee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600 outline-none"
                    >
                    Dr. Seung Jae Lee
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>
        
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto justify-center items-center flex border-t border-black py-2 text-xs xs:text-sm sm:text-base text-center mt-3">
          <p className="w-full">
            &copy; {new Date().getFullYear()} FIU GRAMMR Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

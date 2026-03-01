export default function Hero() {
  return (
    <>
      <div className="w-[95%] xs:w-[90%] sm:w-[85%] md:w-[80%] max-w-3xl mx-auto flex flex-col justify-center items-center py-12 sm:py-20 px-2">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-700 text-center leading-tight">
          Welcome to the <br className="hidden sm:block" />
          Granular Micromechanics Research Lab
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl">
          Advancing research at the intersection of micromechanics and granular materials. Explore our innovative projects, meet our dedicated team, and discover how we are shaping the future of granular science at FIU.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-700 font-semibold py-2 xs:py-3 px-6 xs:px-8 rounded-lg transition duration-300 text-base xs:text-lg"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}

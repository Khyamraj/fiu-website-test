import Image from "next/image";

export default function Grammr() {
  return (
    <div className="w-24 xs:w-32 sm:w-40 md:w-52 lg:w-60 xl:w-[300px] max-w-full h-auto flex items-center">
      
      <Image
        src="/images/Grammr-logo.png"
        alt="FIU Logo"
        width={350}
        height={250}
        className="w-full h-auto "
        sizes="(max-width: 480px) 96px, (max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 208px, (max-width: 1280px) 240px, 350px"
        priority
      /> 
      
      </div>
  );
}

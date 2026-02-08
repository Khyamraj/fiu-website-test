import Image from "next/image";

export default function Grammr() {
  return (
    <div className="w-24 xs:w-32 sm:w-40 md:w-52 lg:w-60 xl:w-[350px] max-w-full h-auto flex items-center">
      <Image
        src="/images/logo.png"
        alt="FIU Logo"
        width={350}
        height={250}
        className="w-full h-auto filter invert sepia saturate-900 hue-rotate-330 brightness-105"
        sizes="(max-width: 480px) 96px, (max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 208px, (max-width: 1280px) 240px, 350px"
        priority
      />
    </div>
  );
}

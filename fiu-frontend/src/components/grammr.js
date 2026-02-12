import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-40 xs:w-52 sm:w-60 md:w-72 lg:w-80 xl:w-[350px] max-w-full h-auto flex items-center">
      <Image
        src="/images/grammr.png"
        alt="Grammr Logo"
        width={350}
        height={250}
        className="w-full h-auto "
        sizes="(max-width: 480px) 160px, (max-width: 640px) 208px, (max-width: 768px) 240px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 350px"
        priority
      />
    </div>
  );
}

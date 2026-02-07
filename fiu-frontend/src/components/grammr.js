import Image from "next/image";

export default function Grammr() {
  return (
    <div >
      <Image
        src="/images/logo.png"
        alt="FIU Logo"
        width={350}
        height={250}
        className="filter invert sepia saturate-900 hue-rotate-330 brightness-105"
      />
    </div>
  );
}

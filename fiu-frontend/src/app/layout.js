import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import Nav from "@/components/nav";
import Footer from "@/components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "FIU",
  description: "Grammr Lab | FIU",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className="w-full min-h-screen flex flex-col relative ">
         
          <div className="relative z-10 flex flex-col min-h-screen w-full">
            <Header />
            <Nav />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

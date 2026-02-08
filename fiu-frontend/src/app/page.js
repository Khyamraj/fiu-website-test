import Body from "@/components/body";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Nav />
      <main className="flex-1 flex flex-col">
        <Body />
      </main>
      <Footer />
    </div>
  );
}

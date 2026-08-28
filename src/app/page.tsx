import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[50rem] flex-col items-center gap-12">
      <Navbar />
      <Menu />
      <Footer />
    </div>
  );
}

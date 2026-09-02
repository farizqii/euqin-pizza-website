import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center gap-12">
      <Homepage />
      <Menu />
      <Footer />
    </div>
  );
}

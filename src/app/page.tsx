import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Home() {
  return (
    // Increased from max-w-7xl to max-w-[1800px] to give 4 columns enough breathing room
    <div className="mx-auto flex w-full max-w-[1800px] flex-col items-center gap-12">
      <Menu />
      <Footer />
    </div>
  );
}

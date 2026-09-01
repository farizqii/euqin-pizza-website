import "./globals.css";
import Navbar from "../components/Navbar"; // Adjust this import path if your file is in a components folder

export const metadata = {
  title: "Fast React Pizza Co.",
  description: "Authentic Italian cuisine baked in a stone oven.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen border-b-4 bg-white font-normal text-charcoal">
        <Navbar />
        <main className="px-8 pb-15 pt-8">{children}</main>
      </body>
    </html>
  );
}

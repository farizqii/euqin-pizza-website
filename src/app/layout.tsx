import "./globals.css";

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
      <body className="min-h-screen border-b-4 border-brand bg-cream px-8 pt-8 pb-15 font-normal text-charcoal">
        {children}
      </body>
    </html>
  );
}

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
      <body>{children}</body>
    </html>
  );
}

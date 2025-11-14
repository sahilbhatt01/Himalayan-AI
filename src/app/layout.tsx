import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Himalayan AI Code School",
  description: "Learn AI & 3D web development — Himalayan-themed bootcamp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030a1a] text-white overflow-x-hidden">
        {/* Fixed Header */}
        <Header />

        {/* Full-width content (no container white margins) */}
        <main className="w-full min-h-screen pt-15">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

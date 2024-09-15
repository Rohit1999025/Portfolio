import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import "./globals.css"; // Optional: If you have global styles

export const metadata = {
  title: "My App",
  description: "This is the layout for my app.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background layers */}
        <div className="fixed top-0 w-full h-full -z-10"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%, rgba(120,119,198,0.3), rgba(255,255,255,0))]"></div>

        {/* Main content */}
        <div className="container mx-auto">
          <Navbar />
          {children}
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </body>
    </html>
  );
}

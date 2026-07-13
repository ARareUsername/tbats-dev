/* ─── Imports ─── */
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Portfolio from '@components/Portfolio';
import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

/* ─── App Root ─── */
export default function App() {
  return (
    <>
      <Navbar />

      {/* ─── Page Sections ─── */}
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ContactForm } from "./components/ContactForm";
import { Home } from "./pages/Home";
import { GallerySection } from "./components/GallerySection";

export default function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Home />
        <GallerySection />
        <ContactForm />
      </Layout>
      <Footer />
    </>
  );
}

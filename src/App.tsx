import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Home } from "./pages/Home";
import { ShopPage } from "./pages/ShopPage";
import { GallerySection } from "./components/GallerySection";
import { ContactForm } from "./components/ContactForm";

import { HerosPage } from "./pages/HerosPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Layout>
                <Hero />
                <Home />
                <GallerySection />
                <ContactForm />
              </Layout>
            </>
          }
        />

        {/* NEW HERO SHOWCASE PAGE */}
        <Route
          path="/heros"
          element={
            <>
              <Layout>
                <HerosPage />
              </Layout>
            </>
          }
        />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

      <Footer />
    </>
  );
}

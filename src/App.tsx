import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import { ShopPage } from "./pages/ShopPage";
import { HerosPage } from "./pages/HerosPage";
import { DynamicPage } from "./pages/DynamicPage";

export default function App() {
  return (
    <>
      <Routes>
        {/* HOME PAGE now CMS-driven */}
        <Route
          path="/"
          element={
            <Layout>
              <DynamicPage slug="/" />
            </Layout>
          }
        />

        {/* You can keep these static for now */}
        <Route
          path="/heros"
          element={
            <Layout>
              <HerosPage />
            </Layout>
          }
        />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>

      <Footer />
    </>
  );
}

import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import BannerSection from "./assets/components/BannerSection/BannerSection";
import Home from "./assets/Page/Home";
import FilmDetail from "./assets/Page/FilmDetail";
import { Routes, Route } from "react-router-dom";
import NotFound from "./assets/Page/NotFound";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<FilmDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <BannerSection />
      <Footer />

    </>
  );
}
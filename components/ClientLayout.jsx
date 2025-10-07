"use client";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

export default function ClientLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}

"use client";
import { GlobalStyles } from "../styles/GlobalStyles";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

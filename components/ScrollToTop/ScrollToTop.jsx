"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ScrollButton, ScrollButtonContainer } from "./ScrollToTop.styles";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 80% of the page
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setIsVisible(scrollPercentage > 80);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButtonContainer>
      {isVisible && (
        <ScrollButton onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </ScrollButton>
      )}
    </ScrollButtonContainer>
  );
}

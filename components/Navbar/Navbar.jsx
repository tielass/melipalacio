"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import {
  NavbarContainer,
  NavbarContent,
  NavbarBackground,
  NavbarScrolledBackground,
  Logo,
  NavLinks,
  NavLink,
  SocialIcons,
  SocialIcon,
} from "./Navbar.styles";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isPortfolioPage = pathname === "/portfolio";

  useEffect(() => {
    // Set client-side flag and check if animation should play
    setIsClient(true);
    const hasPlayedAnimation = sessionStorage.getItem("logoAnimationPlayed");
    if (hasPlayedAnimation) {
      setShowLogoAnimation(false);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle logo animation completion
  const handleLogoAnimationEnd = () => {
    setShowLogoAnimation(false);
    // Mark animation as played in this session
    sessionStorage.setItem("logoAnimationPlayed", "true");
  };

  return (
    <NavbarContainer isScrolled={isScrolled}>
      {isScrolled && <NavbarScrolledBackground />}
      {isAboutPage && (
        <NavbarBackground>
          <Image
            src="/images/headers/about-header.png"
            alt="About page background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </NavbarBackground>
      )}
      {isContactPage && (
        <NavbarBackground>
          <Image
            src="/images/headers/contact-header.png"
            alt="Contact page background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </NavbarBackground>
      )}
      {isPortfolioPage && (
        <NavbarBackground>
          <Image
            src="/images/headers/portfolio-header.png"
            alt="Portfolio page background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </NavbarBackground>
      )}
      <NavbarContent isScrolled={isScrolled}>
        <Logo isScrolled={isScrolled}>
          <Link href="/">
            {isClient && showLogoAnimation ? (
              <video
                autoPlay
                muted
                playsInline
                onEnded={handleLogoAnimationEnd}
                width={isScrolled ? 45 : 60}
                height={isScrolled ? 45 : 60}
                style={{
                  objectFit: "contain",
                  display: "block",
                }}
              >
                <source src="/videos/Logo Animation_01.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src="/icons/Logo.svg"
                alt="Meli Palacio Logo"
                width={isScrolled ? 45 : 60}
                height={isScrolled ? 45 : 60}
                priority
              />
            )}
          </Link>
        </Logo>
        <NavLinks isScrolled={isScrolled}>
          <NavLink href="/portfolio" isScrolled={isScrolled}>
            Portfolio
          </NavLink>
          <NavLink href="/about" isScrolled={isScrolled}>
            About
          </NavLink>
          <NavLink href="/contact" isScrolled={isScrolled}>
            Contact
          </NavLink>
        </NavLinks>
        <SocialIcons isScrolled={isScrolled}>
          <SocialIcon
            href="https://www.linkedin.com/in/melisa-palacio/"
            aria-label="LinkedIn"
            style={{
              filter: isScrolled
                ? "none"
                : "drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5))",
            }}
          >
            <FaLinkedin size={20} />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/meli_palacio/ "
            aria-label="Instagram"
            style={{
              filter: isScrolled
                ? "none"
                : "drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5))",
            }}
          >
            <FaInstagramSquare size={20} />
          </SocialIcon>
          <SocialIcon
            href="https://de.pinterest.com/melixisp/_saved/"
            aria-label="Pinterest"
            style={{
              filter: isScrolled
                ? "none"
                : "drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5))",
            }}
          >
            <FaPinterest size={20} />
          </SocialIcon>
        </SocialIcons>
      </NavbarContent>
    </NavbarContainer>
  );
}

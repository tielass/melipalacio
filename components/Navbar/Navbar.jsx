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
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isPortfolioPage = pathname === "/portfolio";
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavbarContainer isScrolled={isScrolled} isHomePage={isHomePage}>
      {(isScrolled || isHomePage) && <NavbarScrolledBackground />}
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
      <NavbarContent isScrolled={isScrolled} isHomePage={isHomePage}>
        <Logo isScrolled={isScrolled}>
          <Link href="/">
            <Image
              src="/icons/Logo.svg"
              alt="Meli Palacio Logo"
              width={isScrolled ? 45 : 60}
              height={isScrolled ? 45 : 60}
              priority
            />
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

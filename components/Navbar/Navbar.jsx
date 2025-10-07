"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import {
  NavbarContainer,
  NavbarContent,
  NavbarBackground,
  Logo,
  NavLinks,
  NavLink,
  SocialIcons,
  SocialIcon,
} from "./Navbar.styles";

export default function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isPortfolioPage = pathname === "/portfolio";

  return (
    <NavbarContainer>
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
      <NavbarContent>
        <Logo>
          <Link href="/">
            <Image
              src="/icons/Logo.svg"
              alt="Meli Palacio Logo"
              width={60}
              height={60}
              priority
            />
          </Link>
        </Logo>
        <NavLinks>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavLinks>
        <SocialIcons>
          <SocialIcon
            href="https://www.linkedin.com/in/melisa-palacio/"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/meli_palacio/ "
            aria-label="Instagram"
          >
            <FaInstagramSquare size={20} />
          </SocialIcon>
          <SocialIcon href="https://de.pinterest.com/melixisp/_saved/" aria-label="Pinterest">
            <FaPinterest size={20} />
          </SocialIcon>
        </SocialIcons>
      </NavbarContent>
    </NavbarContainer>
  );
}

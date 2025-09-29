"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Instagram, Facebook, Heart } from "lucide-react";
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
          <SocialIcon href="#" aria-label="Facebook">
            <Facebook size={20} />
          </SocialIcon>
          <SocialIcon href="#" aria-label="LinkedIn">
            <Linkedin size={20} />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <Instagram size={20} />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Pinterest">
            <Heart size={20} />
          </SocialIcon>
        </SocialIcons>
      </NavbarContent>
    </NavbarContainer>
  );
}

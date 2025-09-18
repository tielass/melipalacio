"use client";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Heart } from "lucide-react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  SocialIcons,
  SocialIcon,
} from "./Navbar.styles";

export default function Navbar() {
  return (
    <NavbarContainer>
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
    </NavbarContainer>
  );
}

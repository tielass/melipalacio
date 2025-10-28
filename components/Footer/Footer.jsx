"use client";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaInstagramSquare, FaPinterest } from "react-icons/fa";
import {
  FooterContainer,
  FooterColumns,
  FooterSection,
  FooterLinks,
  FooterLink,
  ContactInfo,
  ContactItem,
  ContactIcon,
  SocialIcons,
  SocialIcon,
  Copyright,
} from "./Footer.styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterColumns>
        <FooterSection>
          <FooterLinks>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/portfolio">Portfolio</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <Mail size={16} />
              </ContactIcon>
              <span>info@melipalacio.com</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <Phone size={16} />
              </ContactIcon>
              <span>+49 1573 1481103</span>
            </ContactItem>
          </ContactInfo>
          <SocialIcons>
            <SocialIcon href="https://www.linkedin.com/in/melisa-palacio/" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/meli_palacio/" aria-label="Instagram">
              <FaInstagramSquare size={20} />
            </SocialIcon>
            <SocialIcon href="https://de.pinterest.com/melixisp/_saved/" aria-label="Pinterest">
              <FaPinterest size={20} />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterColumns>

      <Copyright>2025 copyright ©melipalacio.com</Copyright>
    </FooterContainer>
  );
}

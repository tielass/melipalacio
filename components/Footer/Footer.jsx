"use client";
import { Linkedin, Facebook, Mail, Phone, Heart, Twitter } from "lucide-react";
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
            <SocialIcon href="#" aria-label="Facebook">
              <Facebook size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="X (Twitter)">
              <Twitter size={20} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Pinterest">
              <Heart size={20} />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterColumns>

      <Copyright>2025 copyright ©melipalacio.com</Copyright>
    </FooterContainer>
  );
}

"use client";
import Image from "next/image";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactForm from "../ContactForm/ContactForm";
import {
  ContactContainer,
  ContactHeader,
  ContactTitle,
  ContactSubtitle,
  ContactDescription,
  ServiceTags,
  ServiceTag,
  ContactContent,
} from "./ContactSection.styles";

export default function ContactSection() {
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>Contact</ContactTitle>
        <ContactSubtitle>Let's Create Something Amazing</ContactSubtitle>
        <ContactDescription>
          Ready to bring your vision to life? I specialize in creating stunning
          motion graphics, animations, and visual experiences that captivate
          audiences and tell compelling stories.
        </ContactDescription>
        <ServiceTags>
          <ServiceTag>Motion Graphics</ServiceTag>
          <ServiceTag>Motion Graphics</ServiceTag>
          <ServiceTag>Motion Graphics</ServiceTag>
          <ServiceTag>Motion Graphics</ServiceTag>
        </ServiceTags>
      </ContactHeader>

      <ContactContent>
        <ContactInfo />
        <ContactForm />
      </ContactContent>
    </ContactContainer>
  );
}

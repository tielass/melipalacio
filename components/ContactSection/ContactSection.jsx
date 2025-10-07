"use client";
import Image from "next/image";
import ContactInfo from "../ContactInfo/ContactInfo";
import ContactForm from "../ContactForm/ContactForm";
import {
  ContactContainer,
  ContactHeader,
  ServiceTags,
  ServiceTag,
  ContactContent,
} from "./ContactSection.styles";
import {
  SectionTitle,
  SectionDescription,
  BodyText,
} from "../../styles/Typography";

export default function ContactSection() {
  return (
    <ContactContainer>
      <ContactHeader>
        <SectionTitle>Contact</SectionTitle>
        <SectionDescription>Let's Create Something Amazing</SectionDescription>
        <BodyText>
          Ready to bring your vision to life? I specialize in creating stunning
          motion graphics, animations, and visual experiences that captivate
          audiences and tell compelling stories.
        </BodyText>
        <ServiceTags>
          <ServiceTag>Motion Graphics</ServiceTag>
          <ServiceTag>Animation</ServiceTag>
          <ServiceTag>Storyboard & Storytelling</ServiceTag>
          <ServiceTag>Visual Design</ServiceTag>
        </ServiceTags>
      </ContactHeader>

      <ContactContent>
        <ContactInfo />
        <ContactForm />
      </ContactContent>
    </ContactContainer>
  );
}

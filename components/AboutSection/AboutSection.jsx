"use client";
import Image from "next/image";
import {
  AboutContainer,
  AboutHeader,
  AboutContent,
  AboutRow,
  AboutColumn,
  AboutImage,
  AboutText,
  AboutPortraitImage,
} from "./AboutSection.styles";
import { SectionTitle, BodyText, SectionDescription } from "../../styles/Typography";

export default function AboutSection() {
  return (
    <AboutContainer>
      <AboutHeader>
        <SectionTitle>About</SectionTitle>
        <SectionDescription>A glimpse into who I am and what inspires me.</SectionDescription>
      </AboutHeader>

      <AboutContent>
        <AboutRow>
          <AboutColumn>
            <AboutImage>
              <Image
                src="/images/meli-about-image.webp"
                alt="Dancer silhouette projection"
                fill
                style={{ objectFit: "cover" }}
              />
            </AboutImage>
          </AboutColumn>
          <AboutColumn>
            <AboutText>
              <SectionTitle>Who am I?</SectionTitle>
              <BodyText>
                I’m a motion designer, illustrator, and dancer with a background in Physics
                Engineering and Media Art & Design. My work bridges science, art, and movement,
                turning complex ideas into expressive visual stories.
              </BodyText>
            </AboutText>
          </AboutColumn>
        </AboutRow>

        <AboutRow>
          <AboutColumn>
            <AboutText>
              <SectionTitle>What do I do?</SectionTitle>
              <BodyText>
                After studying Plastic Arts and earning a B.Sc. in Physics Engineering from the
                Universidad Nacional de Colombia, I completed an MFA in Media Art and Design at the
                Bauhaus-Universität Weimar. There, I focused on animation, video, illustration,
                choreography, and stage design, exploring how creativity and knowledge can merge. My
                MFA project, Black Body Radiation — a multimedia performance inspired by Max
                Planck’s experiments on light — received Summa Cum Laude, the Bauhaus Graduation
                Scholarship, and a nomination for the Media Art Award 2016. I’ve collaborated with
                several companies in Colombia and Germany as an art director, media designer,
                animator and motion designer.
              </BodyText>
            </AboutText>
          </AboutColumn>
          <AboutColumn>
            <AboutPortraitImage>
              <Image
                src="/images/meli-photo-web.webp"
                alt="Meli portrait"
                fill
                style={{ objectFit: "cover" }}
              />
            </AboutPortraitImage>
          </AboutColumn>
        </AboutRow>
      </AboutContent>
    </AboutContainer>
  );
}

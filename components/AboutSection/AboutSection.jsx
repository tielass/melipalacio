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
import {
  SectionTitle,
  BodyText,
  SectionDescription,
} from "../../styles/Typography";

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
                I'm a motion designer, illustrator, and dancer who loves
                bringing ideas to life through movement and visuals. Whether
                it's designing animations, creating illustrations, or
                performing, I'm always exploring new ways to tell stories. My
                work is inspired by rhythm, energy, and the beauty of expression
                in different forms. I enjoy blending creativity with technique
                to make things that connect with people.
              </BodyText>
            </AboutText>
          </AboutColumn>
        </AboutRow>

        <AboutRow>
          <AboutColumn>
            <AboutText>
              <SectionTitle>Who am I?</SectionTitle>
              <BodyText>
                I'm a motion designer, illustrator, and dancer who loves
                bringing ideas to life through movement and visuals. Whether
                it's designing animations, creating illustrations, or
                performing, I'm always exploring new ways to tell stories. My
                work is inspired by rhythm, energy, and the beauty of expression
                in different forms. I enjoy blending creativity with technique
                to make things that connect with people.
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

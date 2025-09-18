"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  HeroContainer,
  BackgroundImage,
  ContentContainer,
  TextContent,
  AboutText,
  NavigationArrow,
} from "./HeroSection.styles";

export default function HeroSection() {
  return (
    <HeroContainer>
      <BackgroundImage>
        <Image
          src="/images/LandingPageBanner.webp"
          alt="Dancer in silhouette with flowing fabric"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </BackgroundImage>

      <ContentContainer>
        <TextContent>
          <AboutText>
            I shape movement into meaning—whether through dancing bodies,
            flowing illustrations, or cinematic motion design, I seek to
            translate emotion into form. My work lives in the spaces between
            rhythm and stillness, where visuals and gestures become poetry
            without words.
          </AboutText>
        </TextContent>
      </ContentContainer>
    </HeroContainer>
  );
}

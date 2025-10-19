"use client";
import { ChevronRight } from "lucide-react";
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
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: -1,
          }}
        >
          <source src="/videos/Header_Animation_02.mp4" type="video/mp4" />
        </video>
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

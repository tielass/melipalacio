"use client";
import {
  ShowreelContainer,
  SectionTitle,
  SectionDescription,
  VideoContainer,
} from "./ShowreelSection.styles";

export default function ShowreelSection() {
  return (
    <ShowreelContainer>
      <SectionTitle>Showreel</SectionTitle>
      <SectionDescription>
        My showreel brings together motion design and dance, showcasing how I
        tell stories through both visuals and movement.
      </SectionDescription>

      <VideoContainer>
        <iframe
          src="https://player.vimeo.com/video/204369278?autoplay=0&loop=0&muted=0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </ShowreelContainer>
  );
}

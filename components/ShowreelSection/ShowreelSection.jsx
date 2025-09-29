"use client";
import { ShowreelContainer, VideoContainer } from "./ShowreelSection.styles";
import {
  ShowreelSectionTitle,
  ShowreelSectionDescription,
} from "../../styles/Typography";

export default function ShowreelSection() {
  return (
    <ShowreelContainer>
      <ShowreelSectionTitle>Showreel</ShowreelSectionTitle>
      <ShowreelSectionDescription>
        My showreel brings together motion design and dance, showcasing how I
        tell stories through both visuals and movement.
      </ShowreelSectionDescription>

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

"use client";
import { useState, useEffect } from "react";
import { ShowreelContainer, VideoContainer } from "./ShowreelSection.styles";
import {
  ShowreelSectionTitle,
  ShowreelSectionDescription,
} from "../../styles/Typography";

export default function ShowreelSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const desktopVideoSrc =
    "https://player.vimeo.com/video/204369278?autoplay=0&loop=0&muted=0";
  const mobileVideoSrc =
    "https://player.vimeo.com/video/1130621840?autoplay=0&loop=0&muted=0";

  return (
    <ShowreelContainer>
      <ShowreelSectionTitle>Showreel</ShowreelSectionTitle>
      <ShowreelSectionDescription>
        My showreel brings together motion design and dance, showcasing how I
        tell stories through both visuals and movement.
      </ShowreelSectionDescription>

      <VideoContainer>
        <iframe
          src={isMobile ? mobileVideoSrc : desktopVideoSrc}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </ShowreelContainer>
  );
}

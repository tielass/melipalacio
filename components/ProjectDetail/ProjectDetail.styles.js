import styled from "@emotion/styled";
import Link from "next/link";
import { theme } from "../../styles/theme";

export const ProjectDetailContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
  color: #333;
`;

export const HeaderImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url("/images/headers/portfolio-header.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProjectTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin: 0 auto;
  text-align: center;
  padding: 2rem 0 1rem 0;
  font-family: ${theme.fonts.primary};
  max-width: 70%;
  padding-left: 8rem;

  @media (max-width: 1200px) {
    max-width: 75%;
    padding-left: 6rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem 0 0.5rem 0;
    max-width: 80%;
    padding-left: 4rem;
  }

  @media (max-width: 480px) {
    max-width: 85%;
    padding-left: 3rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
  text-align: center;
  padding: 0 2rem 3rem 2rem;
  font-family: ${theme.fonts.primary};
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem 2rem 1rem;
  }
`;

export const VideoSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
`;

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const VideoTitle = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  z-index: 2;
`;

export const VideoShare = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
  font-size: 0.9rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const GallerySection = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`;

export const ImageItem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%; /* Square aspect ratio */
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GalleryNavButton = styled.button`
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  background: transparent;
  border: 3px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  ${(props) => (props.position === "left" ? "left: 1rem;" : "right: 1rem;")}

  &:hover {
    background: ${theme.colors.primary};
    color: white;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    ${(props) =>
      props.position === "left" ? "left: 0.5rem;" : "right: 0.5rem;"}
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    ${(props) =>
      props.position === "left" ? "left: 0.25rem;" : "right: 0.25rem;"}
  }
`;

export const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem 2rem 1rem;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SectionTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  font-family: ${theme.fonts.primary};
`;

export const SectionContent = styled.div`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  font-family: ${theme.fonts.primary};

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: #0066cc;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InfoItem = styled.div`
  margin-bottom: 1rem;
`;

export const InfoLabel = styled.div`
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-family: ${theme.fonts.primary};
`;

export const InfoValue = styled.div`
  color: #666;
  font-size: 0.9rem;
  font-family: ${theme.fonts.primary};
`;

// Lightbox styles
export const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
`;

export const LightboxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const LightboxImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    width: 40px;
    height: 40px;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  transition: background-color 0.3s ease;
  ${(props) => (props.position === "left" ? "left: 2rem;" : "right: 2rem;")}

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    ${(props) => (props.position === "left" ? "left: 1rem;" : "right: 1rem;")}
  }
`;

export const ImageCounter = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: ${theme.fonts.primary};
  z-index: 1001;

  @media (max-width: 768px) {
    bottom: 1rem;
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: calc(300px + 2rem);
  left: calc(50% - 600px + 2rem);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  text-decoration: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  transition: all 0.3s ease;
  z-index: 1000;
  pointer-events: auto;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    left: 2rem;
  }

  @media (max-width: 768px) {
    top: calc(300px + 1rem);
    left: 1rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    top: calc(300px + 0.5rem);
    left: 0.5rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

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
  margin: 0;
  text-align: center;
  padding: 2rem 0 1rem 0;
  font-family: ${theme.fonts.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem 0 0.5rem 0;
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

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
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

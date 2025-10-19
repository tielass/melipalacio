import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: flex-start;
  padding-top: 70vh;
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
    gap: 2rem;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  color: ${theme.colors.secondary};
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const NavigationArrow = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8b5cf6;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;

  &:hover {
    transform: translateY(-50%) translateX(4px);
    color: #7c3aed;
  }

  @media (max-width: 768px) {
    right: 1rem;
  }
`;

import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const PortfolioContainer = styled.section`
  padding: 16rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem 2rem;
  }
`;

export const PortfolioHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 1200px;
  width: 100%;
`;

export const CategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

export const CategoryFilter = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    right: 50%;
    height: 2px;
    background-color: ${theme.colors.primary};
    transform: translateX(-50%);
    transition: all 0.3s ease;
    width: 0;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  ${({ active }) =>
    active &&
    `
    color: ${theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ProjectCard = styled.div`
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  aspect-ratio: 1;
  text-decoration: none;
  display: block;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(173, 80, 255, 0.2);
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem 1rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  z-index: 2;
  font-family: ${theme.fonts.primary};
  margin: 0;
`;

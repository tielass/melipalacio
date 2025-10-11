import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const ProjectsContainer = styled.section`
  padding: 6rem 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

// SectionTitle and SectionDescription moved to Typography.js

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

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
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
`;

export const ProjectImageInner = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.8) 0%,
    rgba(139, 92, 246, 0.4) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  padding: 1rem;
`;

export const ProjectCardWithHover = styled(ProjectCard)`
  &:hover .project-overlay {
    opacity: 1;
  }

  &:hover .project-image-inner {
    transform: scale(1.05);
  }
`;

// ProjectTitle moved to Typography.js as CardTitle

export const ViewAllButton = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  align-self: center;
  margin-top: 1rem;

  &:hover {
    background: ${theme.colors.backgroundDark};
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding: 0.875rem 2.5rem;
    font-size: 1rem;
  }
`;

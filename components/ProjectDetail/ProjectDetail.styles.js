import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const ProjectDetailContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  padding: 2rem 4rem;
  color: white;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const ProjectHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #111;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProjectCategory = styled.span`
  color: ${theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${theme.fonts.primary};
`;

export const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
  font-family: ${theme.fonts.primary};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
  margin: 0;
  font-family: ${theme.fonts.primary};
`;

export const ProjectActions = styled.div`
  margin-top: 1rem;
`;

export const ViewProjectButton = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #9d4edd;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(173, 80, 255, 0.3);
  }
`;

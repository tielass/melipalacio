import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const PartnersContainer = styled.section`
  background-color: ${theme.colors.white};
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr;
`;

export const PartnersHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`;

// PartnersTitle and PartnersSubtitle moved to Typography.js

export const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
  padding: 0 2rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const PartnerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: scale(1.5);
    opacity: 0.8;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(100%);
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0%) sepia(100%) saturate(2000%) hue-rotate(247deg) brightness(0.8)
        contrast(1.2);
    }
  }
`;

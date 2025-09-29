import styled from "@emotion/styled";
import { theme } from "./theme";

// Universal Section Title (small purple text, uppercase)
export const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #ad50ff;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  font-family: ${theme.fonts.primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

// Universal Section Description (large bold description text)
export const SectionDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #030335;
  max-width: 1200px;
  margin-bottom: 4rem;
  line-height: 1.6;
  font-family: ${theme.fonts.primary};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

// Universal Body Text (regular paragraph text)
export const BodyText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${theme.colors.secondary};
  margin: 0;
  font-family: ${theme.fonts.primary};
  text-align: center;
  max-width: 1200px;
`;

// Universal Description Text (for contact and other descriptions)
export const DescriptionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.gray[600]};
  margin: 0 0 3rem 0;
  max-width: 600px;
  font-family: ${theme.fonts.primary};
`;

// Universal Card Title (for project cards and similar)
export const CardTitle = styled.h3`
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
`;

// Universal Header Container (for section headers)
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`;

// Universal Content Container (for main content areas)
export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Specialized title for Showreel section (matches your current style)
export const ShowreelSectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #ad50ff;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  font-family: ${theme.fonts.primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

// Specialized description for Showreel section (matches your current style)
export const ShowreelSectionDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #030335;
  max-width: 1200px;
  margin-bottom: 4rem;
  line-height: 1.6;
  font-family: ${theme.fonts.primary};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const ContactContainer = styled.section`
  min-height: 100vh;
`;

export const ContactHeader = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;
`;

export const ContactTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const ContactSubtitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  line-height: 1.2;
  margin: 0 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ContactDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${theme.colors.gray[600]};
  margin: 0 0 3rem 0;
  max-width: 600px;
`;

export const ServiceTags = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const ServiceTag = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

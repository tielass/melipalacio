import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const ContactContainer = styled.section`
  padding: 16rem 0 4rem 0;

  @media (max-width: 768px) {
    margin-top: 5rem;
    padding: 4rem 2rem 2rem;
  }
`;

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;
`;

// ContactTitle, ContactSubtitle, and ContactDescription moved to Typography.js

export const ServiceTags = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ServiceTag = styled.div`
  background-color: ${theme.colors.tertiary};
  color: ${theme.colors.text};
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

export const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;

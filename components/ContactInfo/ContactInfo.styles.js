import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background-color: ${theme.colors.background};
  padding: 3rem;
  border-radius: 12px;
  margin-bottom: 4rem;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }
`;

export const InfoItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
`;

export const InfoTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  margin: 0 0 1rem 0;
`;

export const InfoDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${theme.colors.text};
  margin: 0;
  text-align: center;
`;

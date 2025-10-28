import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const AboutContainer = styled.section`
  background-color: ${theme.colors.white};
  padding: 16rem 0 4rem 0;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-top: 5rem;
    padding: 4rem 2rem 2rem;
  }
`;

export const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

export const AboutColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const AboutPortraitImage = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
`;

// AboutTextTitle and AboutTextContent moved to Typography.js

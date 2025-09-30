import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const FormContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding-top: 4rem;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.secondary};
  margin: 0 0 2rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${theme.colors.background};
  color: ${theme.colors.gray[800]};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.gray[500]};
  }
`;

export const FormTextarea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${theme.colors.background};
  color: ${theme.colors.gray[800]};
  min-height: 200px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.gray[500]};
  }
`;

export const SubmitButton = styled.button`
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
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(173, 80, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const FormContainer = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
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
  font-weight: 500;
  color: ${theme.colors.gray[700]};
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${theme.colors.gray[100]};
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
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[800]};
  min-height: 120px;
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
  background: linear-gradient(135deg, ${theme.colors.primary}, #8b2fc9);
  color: ${theme.colors.white};
  border: none;
  padding: 1rem 3rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  align-self: flex-end;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(173, 80, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

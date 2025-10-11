import styled from "@emotion/styled";
import Link from "next/link";

export const FooterContainer = styled.footer`
  background-color: #0D0D33;
  color: white;
  padding: 4rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 3rem 2rem 2rem;
  }
`;

export const FooterColumns = styled.div`
  display: flex;
  gap: 9rem;
  align-items: start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FooterLink = styled(Link)`
  color: white;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateX(4px);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 500;
  font-size: 1rem;
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1.5rem;
`;

export const SocialIcon = styled.a`
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

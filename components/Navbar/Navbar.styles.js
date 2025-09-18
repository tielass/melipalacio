import styled from "@emotion/styled";
import Link from "next/link";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  
  img {
    filter: brightness(0) invert(1);
    transition: all 0.3s ease;
  }
  
  &:hover img {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    gap: 2rem;
    position: static;
    transform: none;
    order: 2;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    order: 3;
  }
`;

export const SocialIcon = styled.a`
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

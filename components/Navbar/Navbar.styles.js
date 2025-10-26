import styled from "@emotion/styled";
import Link from "next/link";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
  min-height: ${(props) =>
    props.isHomePage ? "80px" : props.isScrolled ? "80px" : "200px"};

  @media (max-width: 768px) {
    min-height: ${(props) =>
      props.isHomePage ? "60px" : props.isScrolled ? "60px" : "100px"};
  }
`;

export const NavbarScrolledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(128, 128, 128, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: -1;

  @media (max-width: 768px) {
  }
`;

export const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) =>
    props.isHomePage
      ? "1rem 4rem"
      : props.isScrolled
      ? "1rem 4rem"
      : "2rem 4rem"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: ${(props) =>
      props.isHomePage
        ? "0.75rem 2rem"
        : props.isScrolled
        ? "0.75rem 2rem"
        : "1.5rem 2rem"};
    flex-direction: column;
    gap: ${(props) =>
      props.isHomePage ? "0.5rem" : props.isScrolled ? "0.5rem" : "1rem"};
  }
`;

export const NavbarBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
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

export const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})`
  color: white;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-shadow: ${(props) =>
    props.isScrolled ? "none" : "0 1px 3px rgba(0, 0, 0, 0.5)"};

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

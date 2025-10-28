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
  min-height: ${(props) => (props.isHomePage ? "80px" : props.isScrolled ? "80px" : "200px")};

  @media (max-width: 768px) {
    min-height: ${(props) => (props.isHomePage ? "60px" : props.isScrolled ? "60px" : "100px")};
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
    props.isHomePage ? "1rem 4rem" : props.isScrolled ? "1rem 4rem" : "2rem 4rem"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: ${(props) =>
      props.isHomePage ? "0.75rem 1rem" : props.isScrolled ? "0.75rem 1rem" : "1rem 1rem"};
    flex-direction: row;
    gap: 0;
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
    display: none;
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
  text-shadow: ${(props) => (props.isScrolled ? "none" : "0 1px 3px rgba(0, 0, 0, 0.5)")};

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
    display: none;
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

// Mobile only elements
export const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  line-height: 0;

  @media (max-width: 768px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 999; /* below navbar (1000) so content sits above? we raise inner */
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 360px;
  background: rgba(32, 32, 32, 0.95);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  gap: 1.25rem;
  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileFooter = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1rem;
`;

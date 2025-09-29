import styled from '@emotion/styled';

export const ShowreelContainer = styled.section`
  padding: 6rem 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  color: #AD50FF;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #030335;
  max-width: 1200px;
  margin-bottom: 4rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background-color: #000;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const VideoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/LandingPageBanner.webp') center/cover;
    opacity: 0.3;
  }

  &::after {
    content: '▶';
    position: relative;
    z-index: 2;
    font-size: 4rem;
    color: #8B5CF6;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

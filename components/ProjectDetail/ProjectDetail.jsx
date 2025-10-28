"use client";
import Image from "next/image";
import Link from "next/link";
import { Share2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  ProjectDetailContainer,
  HeaderImage,
  ProjectTitle,
  ProjectDescription,
  VideoSection,
  VideoContainer,
  VideoIframe,
  VideoTitle,
  VideoShare,
  GallerySection,
  ImageGrid,
  ImageItem,
  GalleryNavButton,
  ProjectNavContainer,
  ProjectNavButton,
  ProjectNavInfo,
  ProjectNavThumbnail,
  ProjectNavTitle,
  ProjectDetails,
  LeftColumn,
  RightColumn,
  SectionTitle,
  SectionContent,
  InfoItem,
  InfoLabel,
  InfoValue,
  LightboxOverlay,
  LightboxContainer,
  LightboxImage,
  CloseButton,
  NavigationButton,
  ImageCounter,
  BackButton,
} from "./ProjectDetail.styles";

export default function ProjectDetail({ project, projects, currentProjectIndex, onProjectChange }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const goToPreviousProject = () => {
    if (projects && onProjectChange) {
      const prevIndex = currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1;
      onProjectChange(prevIndex);
    }
  };

  const goToNextProject = () => {
    if (projects && onProjectChange) {
      const nextIndex = currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1;
      onProjectChange(nextIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <ProjectDetailContainer>
      <BackButton href="/portfolio">
        <ChevronLeft size={20} />
        Back
      </BackButton>

      <HeaderImage />
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>

      {project.videoUrl && (
        <VideoSection>
          <VideoContainer>
            <VideoIframe
              src={project.videoUrl}
              title={project.videoTitle || project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <VideoTitle>{project.videoTitle || project.title}</VideoTitle>
            <VideoShare>
              <Share2 size={16} />
              Share
            </VideoShare>
          </VideoContainer>
        </VideoSection>
      )}

      {project.images && project.images.length > 0 && (
        <GallerySection>
          {projects && onProjectChange && (
            <ProjectNavContainer position="left">
              <ProjectNavButton onClick={goToPreviousProject}>
                <ChevronLeft size={24} />
              </ProjectNavButton>
              <ProjectNavInfo position="left">
                <ProjectNavThumbnail>
                  <Image
                    src={
                      projects[
                        currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
                      ].thumbnail ||
                      projects[
                        currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
                      ].images[0]
                    }
                    alt={
                      projects[
                        currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
                      ].title
                    }
                    width={40}
                    height={40}
                    style={{ objectFit: "cover" }}
                  />
                </ProjectNavThumbnail>
                <ProjectNavTitle position="left">
                  {
                    projects[
                      currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
                    ].title
                  }
                </ProjectNavTitle>
              </ProjectNavInfo>
            </ProjectNavContainer>
          )}

          <ImageGrid>
            {project.images.slice(0, 20).map((image, index) => (
              <ImageItem key={index} onClick={() => openLightbox(index)}>
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ImageItem>
            ))}
          </ImageGrid>

          {projects && onProjectChange && (
            <ProjectNavContainer position="right">
              <ProjectNavInfo position="right">
                <ProjectNavThumbnail>
                  <Image
                    src={
                      projects[
                        currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1
                      ].thumbnail ||
                      projects[
                        currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1
                      ].images[0]
                    }
                    alt={
                      projects[
                        currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1
                      ].title
                    }
                    width={40}
                    height={40}
                    style={{ objectFit: "cover" }}
                  />
                </ProjectNavThumbnail>
                <ProjectNavTitle position="right">
                  {
                    projects[
                      currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1
                    ].title
                  }
                </ProjectNavTitle>
              </ProjectNavInfo>
              <ProjectNavButton onClick={goToNextProject}>
                <ChevronRight size={24} />
              </ProjectNavButton>
            </ProjectNavContainer>
          )}
        </GallerySection>
      )}

      {/* Lightbox */}
      {lightboxOpen && project.images && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeLightbox}>
              <X size={24} />
            </CloseButton>

            <LightboxImage>
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </LightboxImage>

            <NavigationButton
              position="left"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={32} />
            </NavigationButton>

            <NavigationButton
              position="right"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={32} />
            </NavigationButton>

            <ImageCounter>
              {currentImageIndex + 1} / {project.images.length}
            </ImageCounter>
          </LightboxContainer>
        </LightboxOverlay>
      )}

      <ProjectDetails>
        <LeftColumn>
          {project.concept && (
            <div>
              <SectionTitle>Concept</SectionTitle>
              <SectionContent>
                <p>{project.concept}</p>
                {project.interestingLinks && project.interestingLinks.length > 0 && (
                  <div>
                    {project.interestingLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.startsWith("http") ? link : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </SectionContent>
            </div>
          )}

          {project.content && (
            <div>
              <SectionTitle>Content</SectionTitle>
              <SectionContent>
                <p>{project.content}</p>
                {project.interestingLinks && project.interestingLinks.length > 0 && (
                  <div>
                    <p>
                      <strong>Source: {project.title}</strong>
                    </p>
                  </div>
                )}
              </SectionContent>
            </div>
          )}

          {project.interestingLinks && project.interestingLinks.length > 0 && (
            <div>
              <SectionTitle>Interesting links</SectionTitle>
              <SectionContent>
                {project.interestingLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.startsWith("http") ? link : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                ))}
              </SectionContent>
            </div>
          )}
        </LeftColumn>

        <RightColumn>
          {project.client && (
            <InfoItem>
              <InfoLabel>Client</InfoLabel>
              <InfoValue>{project.client}</InfoValue>
            </InfoItem>
          )}

          {project.role && (
            <InfoItem>
              <InfoLabel>Role</InfoLabel>
              <InfoValue>{project.role}</InfoValue>
            </InfoItem>
          )}

          {project.animationTechniques && (
            <InfoItem>
              <InfoLabel>Animation techniques</InfoLabel>
              <InfoValue>{project.animationTechniques}</InfoValue>
            </InfoItem>
          )}

          {project.software && (
            <InfoItem>
              <InfoLabel>Software</InfoLabel>
              <InfoValue>{project.software}</InfoValue>
            </InfoItem>
          )}

          {project.team && (
            <InfoItem>
              <InfoLabel>Team</InfoLabel>
              <InfoValue>{project.team}</InfoValue>
            </InfoItem>
          )}

          {project.category && (
            <InfoItem>
              <InfoLabel>Category</InfoLabel>
              <InfoValue>{project.category}</InfoValue>
            </InfoItem>
          )}

          {project.institution && (
            <InfoItem>
              <InfoLabel>Institution</InfoLabel>
              <InfoValue>{project.institution}</InfoValue>
            </InfoItem>
          )}

          {project.supervisor && (
            <InfoItem>
              <InfoLabel>Supervisor</InfoLabel>
              <InfoValue>{project.supervisor}</InfoValue>
            </InfoItem>
          )}

          {project.photographer && (
            <InfoItem>
              <InfoLabel>Photographer</InfoLabel>
              <InfoValue>{project.photographer}</InfoValue>
            </InfoItem>
          )}
        </RightColumn>
      </ProjectDetails>
    </ProjectDetailContainer>
  );
}

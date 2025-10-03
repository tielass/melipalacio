"use client";
import Image from "next/image";
import Link from "next/link";
import { Share2 } from "lucide-react";
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
  ImageGrid,
  ImageItem,
  ProjectDetails,
  LeftColumn,
  RightColumn,
  SectionTitle,
  SectionContent,
  InfoItem,
  InfoLabel,
  InfoValue,
} from "./ProjectDetail.styles";

export default function ProjectDetail({ project }) {
  return (
    <ProjectDetailContainer>
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
        <ImageGrid>
          {project.images.slice(0, 20).map((image, index) => (
            <ImageItem key={index}>
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </ImageItem>
          ))}
        </ImageGrid>
      )}

      <ProjectDetails>
        <LeftColumn>
          {project.concept && (
            <div>
              <SectionTitle>Concept</SectionTitle>
              <SectionContent>
                <p>{project.concept}</p>
                {project.interestingLinks &&
                  project.interestingLinks.length > 0 && (
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
                {project.interestingLinks &&
                  project.interestingLinks.length > 0 && (
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
        </RightColumn>
      </ProjectDetails>
    </ProjectDetailContainer>
  );
}

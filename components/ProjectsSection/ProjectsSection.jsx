"use client";
import Image from "next/image";
import { projects } from "../../data/projects";
import {
  ProjectsContainer,
  SectionTitle,
  SectionDescription,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectImageInner,
  ProjectOverlay,
  ProjectCardWithHover,
  ProjectTitle,
  ViewAllButton,
} from "./ProjectsSection.styles";

export default function ProjectsSection() {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <SectionDescription>
        A collection of my work in motion, illustration, and performance...
      </SectionDescription>

      <ProjectsGrid>
        {projects.slice(0, 9).map((project) => (
          <ProjectCardWithHover key={project.id}>
            <ProjectImage>
              <ProjectImageInner className="project-image-inner">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ProjectImageInner>
              <ProjectOverlay className="project-overlay">
                <div>
                  <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                    {project.category}
                  </div>
                  <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                    View Project
                  </div>
                </div>
              </ProjectOverlay>
            </ProjectImage>
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectCardWithHover>
        ))}
      </ProjectsGrid>

      <ViewAllButton>View All Projects</ViewAllButton>
    </ProjectsContainer>
  );
}

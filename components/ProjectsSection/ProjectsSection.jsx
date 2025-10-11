"use client";
import Image from "next/image";
import { projects } from "../../data/projects";
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectImageInner,
  ProjectOverlay,
  ProjectCardWithHover,
  ProjectTitle,
  ViewAllButton,
} from "./ProjectsSection.styles";
import {
  ShowreelSectionTitle,
  ShowreelSectionDescription,
  CardTitle,
} from "../../styles/Typography";
import { useRouter } from "next/navigation";

export default function ProjectsSection() {
  const router = useRouter();
  return (
    <ProjectsContainer>
      <ShowreelSectionTitle>Projects</ShowreelSectionTitle>
      <ShowreelSectionDescription>
        A collection of my work in motion, illustration, and performance...
      </ShowreelSectionDescription>

      <ProjectsGrid>
        {projects.slice(0, 9).map((project) => (
          <ProjectCardWithHover
            key={project.id}
            onClick={() => router.push(`/portfolio/${project.id}`)}
            style={{ cursor: "pointer" }}
          >
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
            <CardTitle>{project.title}</CardTitle>
          </ProjectCardWithHover>
        ))}
      </ProjectsGrid>

      <ViewAllButton onClick={() => router.push("/portfolio")}>
        View All Projects
      </ViewAllButton>
    </ProjectsContainer>
  );
}

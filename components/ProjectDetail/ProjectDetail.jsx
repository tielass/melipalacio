"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  ProjectDetailContainer,
  BackButton,
  ProjectHeader,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectCategory,
  ProjectDescription,
  ProjectActions,
  ViewProjectButton,
} from "./ProjectDetail.styles";

export default function ProjectDetail({ project }) {
  return (
    <ProjectDetailContainer>
      <BackButton href="/portfolio">
        <ArrowLeft size={20} />
        Back to Portfolio
      </BackButton>

      <ProjectHeader>
        <ProjectImage>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </ProjectImage>
        
        <ProjectInfo>
          <ProjectCategory>{project.category}</ProjectCategory>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          
          <ProjectActions>
            <ViewProjectButton>
              View Full Project
            </ViewProjectButton>
          </ProjectActions>
        </ProjectInfo>
      </ProjectHeader>
    </ProjectDetailContainer>
  );
}

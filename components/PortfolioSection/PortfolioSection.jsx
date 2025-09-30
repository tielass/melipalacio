"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import {
  PortfolioContainer,
  PortfolioHeader,
  CategoryFilters,
  CategoryFilter,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
} from "./PortfolioSection.styles";
import { SectionTitle, SectionDescription } from "../../styles/Typography";

const categories = [
  "Science & Art",
  "Motion Design & Animation",
  "Dance & Performance",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Science & Art");

  // Filter projects based on category
  const filteredProjects = projects.filter((project) => {
    switch (activeCategory) {
      case "Science & Art":
        return (
          project.category === "Motion Design" ||
          project.category === "Illustration"
        );
      case "Motion Design & Animation":
        return project.category === "Motion Design";
      case "Dance & Performance":
        return project.category === "Dance Performance";
      default:
        return true;
    }
  });

  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <SectionTitle>Projects</SectionTitle>
        <SectionDescription style={{ color: "white" }}>
          A collection of my work in motion, illustration, and performance...
        </SectionDescription>

        <CategoryFilters>
          {categories.map((category) => (
            <CategoryFilter
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryFilter>
          ))}
        </CategoryFilters>
      </PortfolioHeader>

      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`}>
            <ProjectCard>
              <ProjectImage>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ProjectImage>
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectCard>
          </Link>
        ))}
      </ProjectsGrid>
    </PortfolioContainer>
  );
}

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
  "All",
  "Science & Art",
  "Motion Design & Animation",
  "Dance & Performance",
  "Painting",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on category
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") {
      return true;
    }
    // Split categories by comma and trim whitespace, then check if the active category is included
    const projectCategories = project.category
      .split(",")
      .map((cat) => cat.trim());
    return projectCategories.includes(activeCategory);
  });

  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <SectionTitle>Projects</SectionTitle>
        <SectionDescription>
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

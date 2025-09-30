"use client";
import { useParams } from "next/navigation";
import ProjectDetail from "../../../components/ProjectDetail/ProjectDetail";
import { projects } from "../../../data/projects";

export default function ProjectPage() {
  const params = useParams();
  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <main>
        <div style={{ 
          padding: '4rem 2rem', 
          textAlign: 'center', 
          color: 'white',
          backgroundColor: '#000',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1>Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
}

// src/components/Projects/ProjectCard.jsx
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {project.technologies && project.technologies.length > 0 && (
          <ul className="tech-stack">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        )}

        <div className="project-actions">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('software');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const softwareProjects: Project[] = [
    {
      title: "Java/Spring Boot Sandbox",
      description: "A collection of microservices and experimental backend patterns focusing on scalability and clean architecture.",
      tech: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
      images: ["https://placehold.co/600x400?text=Spring+Boot+1", "https://placehold.co/600x400?text=Architecture+Diagram"]
    },
    {
      title: "Portfolio NAS Dashboard",
      description: "A high-performance personal portal for managing NAS services and showcasing engineering projects.",
      tech: ["React 19", "Vite", "TypeScript", "Docker"],
      images: ["https://placehold.co/600x400?text=Dashboard+UI", "https://placehold.co/600x400?text=Mobile+View"]
    }
  ];

  const hardwareProjects: Project[] = [
    {
      title: "ESP32 Smart Garage Door Opener",
      description: "IoT integration for legacy garage doors using ESPHome and relay modules. Features real-time status and mobile control.",
      tech: ["ESPHome", "ESP32", "Home Assistant"],
      images: ["https://placehold.co/600x400?text=ESP32+Wiring", "https://placehold.co/600x400?text=Home+Assistant+UI"]
    },
    {
      title: "iPad 4 Retina PC Monitor",
      description: "Conversion of a retired iPad 4 display into a high-density secondary PC monitor using a custom driver board.",
      tech: ["Display Driver Boards", "Custom Housing"],
      images: ["https://placehold.co/600x400?text=Retina+Display", "https://placehold.co/600x400?text=Custom+Case"]
    }
  ];

  const displayProjects = activeTab === 'software' ? softwareProjects : hardwareProjects;

  return (
    <div className="page-content">
      <h1 className="page-title">Projects</h1>
      <div className="tabs">
        <button 
          className={activeTab === 'software' ? 'active' : ''} 
          onClick={() => setActiveTab('software')}
        >
          Software & Digital
        </button>
        <button 
          className={activeTab === 'hardware' ? 'active' : ''} 
          onClick={() => setActiveTab('hardware')}
        >
          Hardware & DIY
        </button>
      </div>

      <div className="grid">
        {displayProjects.map((project, index) => (
          <div 
            key={index} 
            className="card project-card" 
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="view-more">View Project Details →</div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedProject(null)}>×</button>
            <h2>{selectedProject.title}</h2>
            <div className="modal-carousel">
              {selectedProject.images.map((img, i) => (
                <img key={i} src={img} alt={`${selectedProject.title} screenshot ${i + 1}`} />
              ))}
            </div>
            <p className="modal-description">{selectedProject.description}</p>
            <div className="tech-tags">
              {selectedProject.tech.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

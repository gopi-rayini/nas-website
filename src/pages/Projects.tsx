import { useState } from 'react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('software');

  const softwareProjects = [
    {
      title: "Custom OpenSCAD MTG Deck Boxes",
      description: "Parametric deck box designs for Commander players, optimized for 3D printing.",
      tech: ["OpenSCAD", "3D Printing"]
    },
    {
      title: "Java/Spring Boot Sandbox",
      description: "A collection of microservices and experimental backend patterns.",
      tech: ["Java", "Spring Boot", "Docker"]
    }
  ];

  const hardwareProjects = [
    {
      title: "ESP32 Smart Garage Door Opener",
      description: "IoT integration for legacy garage doors using ESPHome and relay modules.",
      tech: ["ESPHome", "ESP32", "Home Assistant"]
    },
    {
      title: "iPad 4 Retina PC Monitor",
      description: "Conversion of a retired iPad 4 display into a high-density secondary PC monitor.",
      tech: ["Display Driver Boards", "Custom Housing"]
    },
    {
      title: "Chabudai Futon Frame",
      description: "Japanese-style low-profile bed frame built with traditional joinery concepts.",
      tech: ["Woodworking", "CAD Design"]
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
          <div key={index} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


import { nasLinks } from '../config/nasUrls';

const NasDashboard: React.FC = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">NAS Dashboard</h1>
      <div className="grid">
        {nasLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="card tile">
            <span className="tile-icon">{link.icon}</span>
            <h3>{link.name}</h3>
            <p>{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NasDashboard;

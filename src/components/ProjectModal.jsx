import "./ProjectModal.css";

export default function ProjectModal({ open, project, onClose }) {
  if(!open || !project) return null;
  return (
    <div className="pm-backdrop" onClick={onClose}>
      <div className="pm-card glass" onClick={e=>e.stopPropagation()}>
        <button className="pm-close" onClick={onClose}>✕</button>

        <h3>{project.title}</h3>
        <p className="pm-short">{project.short}</p>

        <div className="pm-links" style={{marginBottom:12}}>
          <a className="btn small primary" href={project.repo} target="_blank" rel="noreferrer">Repository</a>
          {project.demo && <a className="btn small ghost" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
        </div>

        <ul className="pm-list">
          {project.details.map((d,i)=> <li key={i}>{d}</li>)}
        </ul>
      </div>
    </div>
  );
}

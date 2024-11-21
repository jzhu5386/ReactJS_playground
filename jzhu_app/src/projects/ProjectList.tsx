import React, { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectPostCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    console.log(project);
    setProjectBeingEdited(project);
  };

  const cancelEdit = () => {
    setProjectBeingEdited({});
  };

  //   return <pre>{JSON.stringify(projects, null, " ")}</pre>;
  const items = projects.map((project) => (
    <div key={project.id} className="cols-sm">
      {project === projectBeingEdited ? (
        <ProjectForm
          onCancel={cancelEdit}
          onSave={onSave}
          project={project}
        ></ProjectForm>
      ) : (
        <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
      )}
    </div>
  ));
  return <div className="row">{items}</div>;
}

export default ProjectList;

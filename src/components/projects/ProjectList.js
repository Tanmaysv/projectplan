import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => { //projects is used for the case if there is no project available
        return (
          <ProjectSummary project={project} key={project.id} />
        )
      })}
    </div>
  )
}
export default ProjectList;

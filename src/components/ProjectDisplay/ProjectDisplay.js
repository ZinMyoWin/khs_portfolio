import React from "react";
import "../ProjectDisplay/ProjectDisplay.css";
import { project_data } from "../../assets/lib/ProjectDetails.js";
export default function ProjectDisplay() {
  const project = project_data;

  return (
    <div className='project' id="project">
      {project.map((data) => (
        <div key={data.id} className='project-container'>
          <div className='project-sub-container'>
            <div className='project-detail-container'>
              <div className='project-intro-container'>
                <div className='project-title'>
                  0{data.id} / {data.name}
                </div>
                <div className='project-intro'>{data.intro}</div>
              </div>
              <div className='project-link'>More shots from this project ↗</div>
            </div>
            <div className='project-img-container'>
              <img src={data.image} alt={data.name} srcset='' />
            </div>
          </div>
          <div className='under-line'></div>
        </div>
      ))}
    </div>
  );
}

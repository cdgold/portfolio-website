import React from "react"
import styled from "styled-components"

const projects = [
  {
    "title": "Zic",
    "url": "zic.fly.dev",
    "description": "Album rating website built using React"
  },
  {
    "title": "Nick Giotis's Portfolio",
    "url": "nickgiotis.fly.dev",
    "description": "Freelance portfolio with custom CMS."
  },

]

const Section = styled.div`
  width: 100vw;
`

interface ProjectProps {
  project: Project
}

const Project = (props: ProjectProps): JSX.Element => {
  const project : Project = props.project 

  return(
    <div>
      {project.title}
      {project.description}
      {project.url ? project.url : null}
    </div>
  )
}   

const Projects = () => {

  const projectsData: Array<Project> = projects

 
  return(
    <Section>
      {projectsData.map((project, index) => {
        return(
          <Project key={index} project={project} />
        )
      })}
    </Section>
  )
}

export default Projects
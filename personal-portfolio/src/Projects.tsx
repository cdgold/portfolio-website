import React from "react"
import styled from "styled-components"
import { Project } from "./types"
import zic_logo from "./assets/zic_cropped.jpg"
import nick_website_logo from "./assets/nick_website_logo.jpg"

const TITLE_SIZE = "45px"

const projects = [
  {
    "title": "Chris Gold",
    "subtitle": "This website",
    "icons": "react"
  },
  {
    "title": "Zic",
    "subtitle": "Album rating social media site",
    "titleImg": zic_logo,
    "url": "zic.fly.dev",
    "bullets": ["Utilizes Spotify API to search 1.8 million albums for users to review",
      "Organizes user and review data in 5NF normalized PostgreSQL database",
      "Employs RESTful Express.js backend to serve data",
      "Customizable user profile",
      "Guarantees information security through Auth0 account management",
    ],
    "icons": "react"
  },
  {
    "title": "Nick Giotis's Website",
    "subtitle": "Freelance portfolio",
    "titleImg": nick_website_logo,
    "url": "nickgiotis.fly.dev",
    "bullets": ["Responsive interface tailored with styled-components",
      "Provides custom content management system letting client upload blog posts, projects, and resume bullets"],
    "icons": "react"
  },

]

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.palette.secondary.background};
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 90%;
`

const Title = styled.div`
  font-size: ${props => props.theme.fonts.sizes.subheading};
  font-family: ${props => props.theme.fonts.subheadingFonts};
  line-height: 1;
  letter-spacing: -1.5px;
  margin-bottom: 1rem;
`

const ProjectTitle = styled.div`
font-size: ${TITLE_SIZE};
font-family: ${props => props.theme.fonts.headingFonts};
line-height: 1;
letter-spacing: -1.5px;
margin-bottom: 1rem;
`

const ProjectSubtitle = styled.div`
font-size: ${props => props.theme.fonts.sizes.bodyLarge};
font-family: ${props => props.theme.fonts.titleFonts};
line-height: 1;
letter-spacing: -1.5px;
margin-bottom: 1rem;
`

const ProjectTitleImg = styled.img`
height: ${TITLE_SIZE};
`

const ProjectBullets = styled.ul`
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
`

const ProjectBullet = styled.li`

`

const ProjectTech = styled.div`
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
  font-family: ${props => props.theme.fonts.bodyFonts};
`

interface ProjectProps {
  project: Project
}

const ShowProject = (props: ProjectProps): JSX.Element => {
  const project : Project = props.project 

  return(
    <div>
      {(project.titleImg) ?
        <ProjectTitleImg src={project.titleImg} alt={`Logo for ${project.title}`}/>
        :
        <ProjectTitle>
          {project.title}
        </ProjectTitle>
      }
      <ProjectSubtitle>
        {project.subtitle}
      </ProjectSubtitle>
      <ProjectTech>
        Made with: 
      </ProjectTech>
      { project.bullets ?  
        <ProjectBullets>
          {project.bullets.map((bullet, index) => {
            return(
              <ProjectBullet key={index}>
                {bullet}
              </ProjectBullet>
            )
          })
          }         
        </ProjectBullets>
        : null }
      {project.url ? project.url : null}
    </div>
  )
}   

const Projects = () => {

  const projectsData: Array<Project> = projects.map(project => {
    const newProject: Project = project as Project;
    return newProject;
  })

 
  return(
    <Section>
      <Content>
        <Title>
      Projects
        </Title>
        {projectsData.map((project, index) => {
          return(
            <ShowProject key={index} project={project} />
          )
        })}
      </Content>
    </Section>
  )
}

export default Projects
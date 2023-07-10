import React, { useState } from "react"
import styled, { useTheme } from "styled-components"
import { Project } from "./types"
import zic_logo from "./assets/zic_cropped.jpg"
import nick_website_logo from "./assets/nick_website_logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faReact, faNodeJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faLeaf } from "@fortawesome/free-solid-svg-icons"
import { ExpressIcon } from "./styling/reusable/TechIcons"
import PostgresSVG from "./assets/postgresql-icon.svg"
import ZicAlbum from "./assets/ZicCaptures/album_page.jpg"
import ZicFollowers from "./assets/ZicCaptures/followers_page.jpg"
import ZicProfile from "./assets/ZicCaptures/profile_page.jpg"

const TITLE_SIZE = "45px"

const ZicProject : Project = {
  "title": "Zic",
  "subtitle": "Album rating social media site",
  "titleImg": zic_logo,
  "url": "https://zic.fly.dev",
  "bullets": ["Utilizes Spotify API to search 1.8 million albums for users to review",
    "Organizes user and review data in 5NF normalized PostgreSQL database",
    "Employs RESTful Express.js backend to serve data",
    "Customizable user profile",
    "Guarantees information security through Auth0 account management",
  ],
  "codeUrl": "https://github.com/cdgold/Zic",
  "tech": [ "react", "html", "css", "node", "express", "styled-components", "postgres" ],
  "images": [ZicAlbum, ZicFollowers, ZicProfile]
}

const NickGiotisProject : Project = {
  "title": "Nick Giotis's Website",
  "subtitle": "Freelance web portfolio",
  "titleImg": nick_website_logo,
  "url": "https://nickgiotis.fly.dev",
  "bullets": ["Responsive interface tailored with styled-components",
    "Provides custom content management system letting client upload blog posts, projects, and resume bullets"],
  "codeUrl": "https://github.com/cdgold/Nicks-portfolio",
  "tech": [ "react", "html", "css", "node", "express", "styled-components", "mongodb" ]
}


const thisSiteProject : Project = {
  "title": "Chris Gold",
  "subtitle": "This website",
  "codeUrl": "https://github.com/cdgold/portfolio-website",
  "tech": [ "react", "html", "css", "styled-components" ]
}

const ImagesContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
`

const ImageSlider = styled.div`
  white-space: nowrap;
`

const GalleryImage = styled.img`
width: 100%;
display: inline-block;
`

interface ImageGalleryProps {
  images: string[];
  projectName: string;
}

const ImageGallery = (props: ImageGalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return(
    <ImagesContainer>
      <ImageSlider>
        {props.images.map((image) => {
          return(
            <GalleryImage src={image} alt={`${props.projectName} screen capture`}/>
          )
        })
        }
      </ImageSlider>
    </ImagesContainer>
  )
}

const Section = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.secondary.background};
  display: flex;
  justify-content: center;
`


const Content = styled.div`
  width: ${props => props.theme.contentWidthPercent};
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
`

const Title = styled.div`
  font-size: ${props => props.theme.fonts.sizes.subheading};
  font-family: ${props => props.theme.fonts.subheadingFonts};
  line-height: 1;
  letter-spacing: -1.5px;
  margin-bottom: 1rem;
`

const ProjectContainer = styled.div`
  border: 2px solid ${props => props.theme.palette.secondary.primary};
  border-radius: 10px;
  margin-bottom: 1rem;  
  min-width: 10rem;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,.2);
  display: grid;
  grid-template-columns: 60% 40%;
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
margin-bottom: .25rem;
`

const ProjectTitleImg = styled.img`
height: ${TITLE_SIZE};
margin-bottom: .5rem;
`

const ProjectBullets = styled.ul`
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
`

const ProjectBullet = styled.li`

`

const ProjectTech = styled.div`
  font-size: ${props => props.theme.fonts.sizes.titleSmall};
  font-family: ${props => props.theme.fonts.bodyFonts};
  display: flex;
  gap: .75rem;
  align-items: center;
  height: ${props => props.theme.fonts.sizes.titleSmall};
`

const ProjectUrl = styled.span` 

  transition: all .2s;

  &: hover {
    cursor: pointer;
    text-shadow: -3px 3px 0px ${props => props.theme.palette.main.primary};
  }
`

const Links = styled(ProjectSubtitle)`
  color: ${props => props.theme.palette.secondary.primary};
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

const ProjectText = styled.div`
  
`

interface ProjectProps {
  project: Project
}

const ShowProject = (props: ProjectProps): JSX.Element => {
  const project : Project = props.project 
  const theme = useTheme()

  return(
    <ProjectContainer>
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
          {project.tech.includes("react") ?
            <FontAwesomeIcon icon={faReact} color={theme.palette.icons.react} /> 
            : null}
          {project.tech.includes("html") ?
            <FontAwesomeIcon icon={faHtml5} color={theme.palette.icons.html} /> 
            : null}
          {project.tech.includes("css") ?
            <FontAwesomeIcon icon={faCss3Alt} color={theme.palette.icons.css} /> 
            : null}
          {project.tech.includes("styled-components") ?
            <span style={{ fontSize: theme.fonts.sizes.bodyLarge }} role="img" aria-label="nails-paint">💅</span>
            : null}
          {project.tech.includes("node") ?
            <FontAwesomeIcon icon={faNodeJs} color={theme.palette.icons.node} /> 
            : null}
          {project.tech.includes("express") ?
            <ExpressIcon /> 
            : null}
          {project.tech.includes("postgres") ?
            <img style={{ height: "100%" }} src={PostgresSVG} alt={"postgres icon"} /> 
            : null}
          {project.tech.includes("mongodb") ?
            <FontAwesomeIcon icon={faLeaf} color={theme.palette.icons.mongoDB} /> 
            : null}
        </ProjectTech>
        <Links> 
          { project.url ?  
            <ProjectUrl onClick={() => window.open(project.url)}>
              Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </ProjectUrl>
            : null }
          { project.codeUrl ?  
            <ProjectUrl onClick={() => window.open(project.codeUrl)}>
              Code <FontAwesomeIcon icon={faGithub} />
            </ProjectUrl>
            : null }
        </Links>
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
      </div>
      <div>
        {project.images ?
          <ImageGallery images={project.images} projectName={project.title} />
          : null}
      </div>
    </ProjectContainer>
  )
}   

const Projects = () => {
  return(
    <Section>
      <Content>
        <Title>
        Projects
        </Title>
        <ShowProject project={ZicProject} />
        <ShowProject project={NickGiotisProject} />
        And, of course:
        <ShowProject project={thisSiteProject} />
      </Content>
    </Section>
  )
}

export default Projects
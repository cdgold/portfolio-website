import React, { useState } from "react"
import styled, { useTheme } from "styled-components"
import { Project } from "./types"
import zic_logo from "./assets/zic_cropped.jpg"
import nick_website_logo from "./assets/nick_website_logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faReact, faNodeJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faLeaf, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { ExpressIcon } from "./styling/reusable/TechIcons"
import { Highlight } from "./styling/reusable/Highlight"
import PostgresSVG from "./assets/postgresql-icon.svg"
import ZicAlbum from "./assets/ZicCaptures/album_page.jpg"
import ZicFollowers from "./assets/ZicCaptures/followers_page.jpg"
import ZicProfile from "./assets/ZicCaptures/profile_page.jpg"
import NickHome from "./assets/NickCaptures/nick_home.png"
import NickEdit from "./assets/NickCaptures/nick_edit.jpg"
import NickResume from "./assets/NickCaptures/nick_resume.jpg"


const TITLE_SIZE = "45px"

const ZicProject : Project = {
  "title": "Zic",
  "subtitle": "Album rating social media site",
  //"titleImg": zic_logo,
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
  "title": "Nick Giotis",
  "subtitle": "Freelance web portfolio",
  //"titleImg": nick_website_logo,
  "url": "https://nickgiotis.fly.dev",
  "bullets": ["Responsive interface tailored with styled-components",
    "Provides custom content management system letting client upload blog posts, projects, and resume bullets"],
  "codeUrl": "https://github.com/cdgold/Nicks-portfolio",
  "tech": [ "react", "html", "css", "node", "express", "styled-components", "mongodb" ],
  "images": [NickHome, NickEdit, NickResume]
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
  place-self: end end;
`

const ImageSlider = styled.div`
  white-space: nowrap;
  transition: ease-out 1.5s;
`

const GalleryImage = styled.img`
width: 100%;
place-self: center;
display: inline-block;
border-radius: 10px;
`

const ProjectButton = styled.span` 
  border: 2px solid black;
  background-color: ${props => props.theme.palette.secondary.secondary};
  border-radius: 5px;
  padding: 5px;
  line-height: 1;
  font-family: ${props => props.theme.fonts.titleFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyLarge};

  transition: all .2s;

  &: hover {
    cursor: pointer;
    transform: translate3d(2px, -2px, 0);
    box-shadow: -3px 3px 0px ${props => props.theme.palette.secondary.accent};
  }
`

const GalleryButtonContainer = styled.div`
color: black;
display: flex;
flex-direction: row;
gap: 1rem;
margin-bottom: 0;
align-content: center;
justify-content: center;

`

interface ImageGalleryProps {
  images: string[];
  projectName: string;
}

const ImageGallery = (props: ImageGalleryProps) => {
  const [index, setIndex] = useState(0)

  return(
    <ImagesContainer>
      <ImageSlider style={{ transform: `translate3d(${-(index % props.images.length)  * 100}%, 0, 0)` }} >
        {props.images.map((image) => {
          return(
            <GalleryImage key={image} src={image} alt={`${props.projectName} screen capture`}/>
          )
        })
        }
      </ImageSlider>
      <GalleryButtonContainer>
        <ProjectButton onClick={() => {
          if (index > 0) {
            setIndex(index - 1)
          }else {
            setIndex(props.images.length - 1)
          } }} > {"<"} </ProjectButton>
        <ProjectButton onClick={() => setIndex(index + 1)}> {">"} </ProjectButton>
      </GalleryButtonContainer>
    </ImagesContainer>
  )
}

const Section = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.secondary.background};
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
`


const Content = styled.div`
  width: ${props => props.theme.contentWidthPercent};
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
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
color: black;
font-size: ${props => props.theme.fonts.sizes.bodyLarge};
font-family: ${props => props.theme.fonts.titleFonts};
line-height: 1;
letter-spacing: -1.5px;
margin-bottom: .25rem;
`

const ProjectBullets = styled.ul`
list-style-type: none;
margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
  color: black;
`

const ProjectBullet = styled.li`
  margin-bottom: .5rem;
`

const ProjectTech = styled.div`
  font-size: ${props => props.theme.fonts.sizes.titleSmall};
  font-family: ${props => props.theme.fonts.bodyFonts};
  display: flex;
  gap: .75rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  height: ${props => props.theme.fonts.sizes.titleSmall};
`

const Links = styled(ProjectSubtitle)`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

interface ProjectTextProps {
  project: Project;
  titleTilt?: number;
}

const ProjectText = (props: ProjectTextProps): JSX.Element => {
  const project = props.project
  const theme = useTheme()

  return(
    <div style={{ textAlign: "center" }}>
      <ProjectTitle>
        <Highlight tiltDegree={props.titleTilt}> {project.title} </Highlight>
      </ProjectTitle>
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
          <ProjectButton onClick={() => window.open(project.url)}>
        Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </ProjectButton>
          : null }
        { project.codeUrl ?  
          <ProjectButton onClick={() => window.open(project.codeUrl)}>
        Code <FontAwesomeIcon icon={faGithub} />
          </ProjectButton>
          : null }
      </Links>
      { project.bullets ?  
        <ProjectBullets>
          {project.bullets.map((bullet, index) => {
            return(
              <ProjectBullet key={index}>
                <FontAwesomeIcon icon={faGlobe} /> {bullet}
              </ProjectBullet>
            )
          })
          }         
        </ProjectBullets>
        : null }
    </div>
  )
}

const ProjectContainer = styled.div`
  background-color: ${props => props.theme.palette.secondary.primary};
  border-radius: 10px;
  margin-bottom: 1rem;  
  min-width: 10rem;
  padding: 15px;
`

const LongProjectContainer = styled(ProjectContainer)`
display: grid;
grid-gap: 5%;
grid-template-columns: 55% 40%;
`

const ShortProjectContainer = styled(ProjectContainer)`
  display: inline-block;
  width: min-content(15ch);
  justify-self: center;
  align-self: center;
`

const FlippedProjectContainer = styled(ProjectContainer)`
display: grid;
grid-gap: 5%;
grid-template-columns: 40% 55%;
`

interface ProjectProps {
  project: Project;
  short?: boolean;
  flip?: boolean;
  titleTilt?: number;
}

const ShowProject = (props: ProjectProps): JSX.Element => {
  const project : Project = props.project 


  if (props.short === true) {
    return(
      <ShortProjectContainer>
        <ProjectText project={props.project} titleTilt={props.titleTilt}/>
      </ShortProjectContainer>
    )
  }

  if (props.flip === true) {
    return(
      <FlippedProjectContainer>
        <div style={{ display: "flex" }}>
          {project.images ?
            <ImageGallery images={project.images} projectName={project.title} />
            : null}
        </div>
        <ProjectText project={props.project} titleTilt={props.titleTilt} />
      </FlippedProjectContainer>
    )
  }

  return(
    <LongProjectContainer>
      <ProjectText project={props.project} titleTilt={props.titleTilt}/>
      <div style={{ display: "flex" }}>
        {project.images ?
          <ImageGallery images={project.images} projectName={project.title} />
          : null}
      </div>
    </LongProjectContainer>
  )
}   

const Projects = () => {
  return(
    <Section>
      <Content>
        <Title>
        Projects
        </Title>
        <ShowProject project={ZicProject} titleTilt={3}/>
        <ShowProject project={NickGiotisProject} flip={true} titleTilt={-2} />
        And, of course: <br></br>
        <ShowProject project={thisSiteProject} short={true} titleTilt={2}  />
      </Content>
    </Section>
  )
}

export default Projects
import React from "react"
import styled, { useTheme } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faHtml5, faNodeJs, faCss3Alt, faPython, faJava, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { faLeaf, faDatabase, faChessPawn, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { ExpressIcon, CPlusPlusIcon } from "./styling/reusable/TechIcons"
import { Highlight } from "./styling/reusable/Highlight"
import PostgresSVG from "./assets/postgresql-icon.svg"
import TypescriptSVG from "./assets/Typescript_logo.svg"
import meStanding from "./assets/me_standing_cropped.jpg"
import AnimateOnShow from "./styling/reusable/AnimateOnShow"

// mobile view

const DESKTOP_VIEW_CUTOFF = "975px"
const MOBILE_VIEW_CUTOFF = "700px"

const Section = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 1rem;
  background-color: ${props => props.theme.palette.secondary.background};
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    width: ${props => props.theme.contentWidthPercent};
  }
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    width: ${props => props.theme.mobileContentWidthPercent};
  }
`

const Title = styled.div`
  font-size: ${props => props.theme.fonts.sizes.subheading};
  font-family: ${props => props.theme.fonts.subheadingFonts};
  line-height: 1;
  letter-spacing: -1.5px;
  margin-bottom: 2rem;
  text-align: center;
`

const AboutGrid = styled.div`
  width: 100%;
  display: grid;
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-template-columns: 30% 30% 30%;
    column-gap: 5%;
    grid-template-rows: 20rem 1fr;
  }
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-template-columns: 48% 48%;
    column-gap: 4%;
    grid-template-rows: 20rem 1fr;
  }
`

const ListContainer = styled.div`
  margin-top: 0px;
  margin-bottom: 1.5rem;
  text-align: center;
  display: grid;
  align-content: space-evenly;
  border: 0px solid black;
  background-color: ${props => props.theme.palette.secondary.primary};
  border-radius: 10px;
  margin-bottom: 1rem;  
  padding: 3px 3px;
`
/*
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-column: 1;
    grid-row: 1;
  }
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-column: 1;
    grid-row: 2;
  }
*/

const LongListContainer = styled(ListContainer)`
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-column: 3;
  }
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-column: 2;
  }
  grid-row: 1 / span 2;
`

const ShortListContainer = styled(ListContainer)`
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-column: 2;
    grid-row: 1;
  }
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-column: 1;
    grid-row: 2;
  }
`
  
const ListHeader = styled.div`
  font-size: ${props => props.theme.fonts.sizes.titleSmall};
  font-family: ${props => props.theme.fonts.titleFonts};
  margin: 0;
  line-height: 1;
  text-align: center;
`

const ListSubeader = styled(ListHeader)`
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    font-size: ${props => props.theme.fonts.sizes.titleTiny};
  }
  @media (min-width: ${MOBILE_VIEW_CUTOFF}) and (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    font-size: 30px;
  }
  @media (max-width: ${MOBILE_VIEW_CUTOFF}) {
    font-size: 24px;
  }
  font-family: ${props => props.theme.fonts.titleFonts};
  margin-bottom: 1rem;
`

const List = styled.ul`
list-style-type: none; 
padding: 0; 
margin: 0;
`

const ListElement = styled.li`
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: 18px;
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: .5rem;
  margin-bottom: .25rem;
  justify-content: center;
  align-items: center;

  @media (max-content) {

  }
`
const TypescriptIcon = styled.img`
  height: 30px;
`

const ListElementIcon = styled.span`
  @media (max-width: ${MOBILE_VIEW_CUTOFF}) {
    display: none;
  }
  font-size: 40px;
  place-self: center;
  height: 90%;
`

const BlurbText = styled.div`
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
  border: 2px solid ${props => props.theme.palette.secondary.primary};
  border-radius: 10px;
  text-align: center;
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-row: 2;
  }
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    grid-row: 3;
  }
  grid-column: 1 / span 2;
  padding: 10px;
  font-weight: 500;
`

const ImgContainer = styled.div`
@media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
  grid-column: 1;
  grid-row: 1;
}
@media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
  grid-column: 1;
  grid-row: 1;
}
  height: 100%;
  display: flex; 
  justify-content: center;
  align-items: center; 
`

const MeImg = styled.img`
border-radius: 10%;
margin-bottom: 1rem;  
height: 85%;
width: 95%;
object-fit: cover;
border: 0px solid black;
`

const About = () => {
  const theme = useTheme()
 
  return(
    <Section>
      <Content>
        <Title>
        About Me
        </Title>
        <AboutGrid>
          <ImgContainer>
            <AnimateOnShow>
              <MeImg src={meStanding} alt={"Chris Gold standing"} />
            </AnimateOnShow>
          </ImgContainer>
          <ShortListContainer>
            <ListSubeader>
              <Highlight $tiltdegree={-1}> Frontend </Highlight>
            </ListSubeader>
            <List>
              <ListElement>
                <ListElementIcon>
                  <FontAwesomeIcon icon={faReact} color={theme.palette.icons.react} /> 
                </ListElementIcon>
                {"React.js"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <FontAwesomeIcon icon={faHtml5} color={theme.palette.icons.html} /> 
                </ListElementIcon>
                {"HTML"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <FontAwesomeIcon icon={faCss3Alt} color={theme.palette.icons.css} /> 
                </ListElementIcon>
                {"CSS"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <span role="img" aria-label="nails-paint">💅</span>
                </ListElementIcon>
                {"styled-components"}
              </ListElement>
            </List>
          </ShortListContainer>
          <LongListContainer>
            <ListSubeader>
              <Highlight $tiltdegree={1}> Backend </Highlight>
            </ListSubeader>
            <List>
              <ListElement>
                <ListElementIcon>
                  <FontAwesomeIcon icon={faNodeJs} color={theme.palette.icons.node}  />
                </ListElementIcon>
                {" Node.js"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <img style={{height: "100%"}} src={PostgresSVG} />
                </ListElementIcon>
                {" PostgreSQL"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <FontAwesomeIcon icon={faLeaf} color={theme.palette.icons.mongoDB} /> 
                </ListElementIcon>
                {" MongoDB"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <ExpressIcon />
                </ListElementIcon>
                {" Express.js"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <FontAwesomeIcon icon={faJava} color={theme.palette.icons.java} /> 
                </ListElementIcon>
                {" Java"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <TypescriptIcon src={TypescriptSVG} />
                </ListElementIcon>
                {" TS/JS"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <FontAwesomeIcon icon={faPython} color={theme.palette.icons.python} /> 
                </ListElementIcon>
                {" Python"}
              </ListElement>
              <ListElement>
                <ListElementIcon>
                  <CPlusPlusIcon />
                </ListElementIcon>
                {" C++"}
              </ListElement>
            </List>
          </LongListContainer>
          <BlurbText>
            {`Hi! I'm Chris, a full stack developer living in D.C. 
          What sets me apart as a developer my attention to detail, complete dedication to every project I work on, 
          and commitment to learning more about software development everyday.
          I also have years of experience in improv comedy, which allow me to think on my feet and work well with a team, and a
          major in English, which empowers me to articulate myself clearly and understand others better.
          When I'm not coding, I enjoy watching (and occasionally performing!) stand-up, getting burgers with my girlfriend, 
          and playing indie games.
        `}
          </BlurbText>
        </AboutGrid>
      </Content>
    </Section>
  )            
}

export default About
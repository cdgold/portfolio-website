import React from "react"
import styled, { useTheme } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faHtml5, faNodeJs, faCss3Alt, faPython, faJava, faSquareJs } from "@fortawesome/free-brands-svg-icons"
import { faLeaf, faDatabase, faChessPawn, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { ExpressIcon, CPlusPlusIcon } from "./styling/reusable/TechIcons"
import PostgresSVG from "./assets/postgresql-icon.svg"
import TypescriptSVG from "./assets/Typescript_logo.svg"

const Section = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.secondary.background};
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: ${props => props.theme.contentWidthPercent};
`

const Title = styled.div`
  font-size: ${props => props.theme.fonts.sizes.subheading};
  font-family: ${props => props.theme.fonts.subheadingFonts};
  line-height: 1;
  letter-spacing: -1.5px;
  margin-bottom: 1rem;
  text-align: center;
`

const ListsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 34% 33%;
`

const ListContainer = styled.div`
  margin-top: 0px;
  margin-bottom: 1.5rem;
  text-align: center;
`

const ListHeader = styled.div`
  font-size: ${props => props.theme.fonts.sizes.titleSmall};
  font-family: ${props => props.theme.fonts.titleFonts};
  margin: 0;
  line-height: 1;
  text-align: center;
`

const ListSubeader = styled(ListHeader)`
  font-size: ${props => props.theme.fonts.sizes.titleTiny};
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-weight: 700;
`

const List = styled.ul`
list-style-type: none; 
padding: 0; 
margin: 0;
`

const ListElement = styled.li`
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: .5rem;
  margin-bottom: .25rem;
  justify-content: center;
  align-items: center;
`

const ListElementIcon = styled.span`
font-size: ${props => props.theme.fonts.sizes.titleSmall};
  place-self: center;
  height: 90%;
`

const BlurbText = styled.div`
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
  text-align: center;
`

const About = () => {
  const theme = useTheme()
 
  return(
    <Section>
      <Content>
        <Title>
        About Me
        </Title>
        <ListHeader>
            Tech Stack
        </ListHeader>
        <ListsContainer>
          <ListContainer>
            <ListSubeader>
              Frontend
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
          </ListContainer>
          <div>
            <ListContainer>
              <ListSubeader>
            Backend
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
              </List>
            </ListContainer>
          </div>
          <div>
            <ListContainer>
              <ListSubeader>
            Languages
              </ListSubeader>
              <List>
                <ListElement>
                  <ListElementIcon>
                    <FontAwesomeIcon icon={faJava} color={theme.palette.icons.java} /> 
                  </ListElementIcon>
                  {" Java"}
                </ListElement>
                <ListElement>
                  <ListElementIcon>
                    <img style={{height: theme.fonts.sizes.titleTiny}} src={TypescriptSVG} />
                  </ListElementIcon>
                  {" Typescript/Javascript"}
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
            </ListContainer>
          </div>
        </ListsContainer>
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
      </Content>
    </Section>
  )            
}

export default About
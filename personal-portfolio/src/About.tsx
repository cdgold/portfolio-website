import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faHtml5, faNodeJs, faCss3Alt, faPython, faJava } from "@fortawesome/free-brands-svg-icons"
import { faLeaf, faDatabase } from "@fortawesome/free-solid-svg-icons"

const bioBlurb = `I'm Chris. I'm from DC, and I enjoy HOBBY1, HOBBY2, and HOBBY3. `

const REACT_ICON_COLOR = "#4d91ff"
const HTML_ICON_COLOR = "#ffc012"
const DATABASE_ICON_COLOR = "#336791"
const LEAF_ICON_COLOR = "#589636"
const NODEJS_ICON_COLOR = "#215732"
const CSS_ICON_COLOR = "#264de4"
const PYTHON_ICON_COLOR = "#ffd343"
const JAVA_ICON_COLOR = "#fc0303"


const Section = styled.div`
  width: 100vw;
  background-color: ${props => props.theme.palette.secondary.background};
`

const Title = styled.div`
  font-size: ${props => props.theme.fonts.sizes.subheading};
  font-family: ${props => props.theme.fonts.subheadingFonts};
  margin-left: 1rem;
`

const ListsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% 34% 33%;
`

const ListContainer = styled.div`
  margin-top: 0px;
  margin-left: .5rem;
`

const ListHeader = styled.div`
  font-size: ${props => props.theme.fonts.sizes.titleSmall};
  font-family: ${props => props.theme.fonts.titleFonts};
  margin: 0;
  line-height: 1;
`

const ListSubeader = styled(ListHeader)`
  font-size: ${props => props.theme.fonts.sizes.titleTiny};
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-style: italic;
`

const List = styled.ul`
list-style-type: none; 
padding: 0; 
margin: 0;
`

const ListElement = styled.li`
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyLarge};
`

const About = () => {
 
  return(
    <Section>
      <Title>
        About Me
      </Title>
      <ListsContainer>
        <ListContainer>
          <ListHeader>
            Tech Stack
          </ListHeader>
          <ListSubeader>
            Frontend
          </ListSubeader>
          <List>
            <ListElement>
              <FontAwesomeIcon icon={faReact} color={REACT_ICON_COLOR} /> {"React.js"}
            </ListElement>
            <ListElement>
              <FontAwesomeIcon icon={faHtml5} color={HTML_ICON_COLOR} /> {"HTML"}
            </ListElement>
            <ListElement>
              <FontAwesomeIcon icon={faCss3Alt} color={CSS_ICON_COLOR} /> {"CSS"}
            </ListElement>
            <ListElement>
              <span role="img" aria-label="sheep">💅</span> {" styled-components"}
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
                <FontAwesomeIcon icon={faNodeJs} color={NODEJS_ICON_COLOR} /> {" Node.js"}
              </ListElement>
              <ListElement>
                <FontAwesomeIcon icon={faDatabase} color={DATABASE_ICON_COLOR} /> {" SQL/PostgreSQL"}
              </ListElement>
              <ListElement>
                <FontAwesomeIcon icon={faLeaf} color={LEAF_ICON_COLOR} /> {" MongoDB"}
              </ListElement>
            </List>
          </ListContainer>
        </div>
        <div>

        </div>
      </ListsContainer>
    </Section>
  )
}

export default About
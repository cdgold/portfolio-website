import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faCopy } from "@fortawesome/free-solid-svg-icons"

const MEETING_LINK = "https://calendly.com/cdgold/30min"

const Section = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.palette.secondary.background};
`

const Title = styled.div`
  font-size: ${props => props.theme.fonts.sizes.subheading};
  font-family: ${props => props.theme.fonts.subheadingFonts};
  line-height: 1;
  letter-spacing: -1.5px;
  margin-bottom: 1rem;
  user-select: none;
  text-align: center;
`

const HighlightContainer = styled.span`
  position: relative;
  display: inline-block;

  &:before {
    content: " ";
    display: block;
    height: 80%;
    width: 100%;
    margin-left: -3px;
    margin-right: -3px;
    position: absolute;
    background: ${props => props.theme.palette.secondary.secondary};
    transform: rotate(2deg);
    top: -1px;
    left: -1px;
    border-radius: 20% 25% 20% 24%;
    z-index: -1;
    padding: 10px 3px 3px 10px;
  }

`

const Highlight = styled.span`
  position: relative;
`

const Content = styled.div`
  width: ${props => props.theme.contentWidthPercent};
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyLarge};
`

const OptionsGrid = styled.div`
width: 100%;
display: grid;
grid-template-columns: 50% 50%;
`

const OptionCell = styled.div`
  place-self: center;
`

const OptionTitle = styled.div`
text-align: center;
font-size: ${props => props.theme.fonts.sizes.titleMedium};
font-family: ${props => props.theme.fonts.titleFonts};
line-height: 1;
margin-bottom: 1.25rem;
text-decoration: underline;
text-decoration-color: ${props => props.theme.palette.secondary.primary};
`

const OptionText = styled.div`
margin-bottom: .75rem;
text-align: center;
font-size: ${props => props.theme.fonts.sizes.bodyLarge};
font-family: ${props => props.theme.fonts.bodyFonts};
`

const ContactButton = styled.button`
background-color: ${props => props.theme.palette.secondary.secondary};
border: 2px solid black;
border-radius: 5px;
padding: 5px;
line-height: 1;
font-family: ${props => props.theme.fonts.titleFonts};
font-size: ${props => props.theme.fonts.sizes.bodyLarge};

transition: all .2s;

&: hover {
  cursor: pointer;
  box-shadow: -3px 3px 0px ${props => props.theme.palette.main.primary};
}
`

const Contact = () => {
 
  return(
    <Section>
      <Content>
        <Title>
        Get in touch
        </Title>
        <OptionsGrid>
          <OptionTitle>
              MEET!
          </OptionTitle>
          <OptionTitle>
              E-MAIL!
          </OptionTitle>
          <OptionText>
              Have a brief meeting with me over phone or Zoom.
          </OptionText>
          <OptionText>
            {"Send me an e-mail at "}
            <HighlightContainer> 
              <Highlight>cdgold9@gmail.com </Highlight></HighlightContainer>.
          </OptionText>
          <OptionCell>
            <ContactButton onClick={ () => window.open(MEETING_LINK) }>
          schedule <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </ContactButton>
          </OptionCell>
          <OptionCell>
            <ContactButton onClick={() => {
              void navigator.clipboard.writeText("cdgold9@gmail.com")
            }
            }>
          Copy to clipboard <FontAwesomeIcon icon={faCopy} />
            </ContactButton>
          </OptionCell>
        </OptionsGrid>
      </Content>
    </Section>
  )
}

export default Contact
import React from "react"
import styled from "styled-components"

const MEETING_LINK = "https://calendly.com/cdgold/30min"

const Section = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
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

const EmailLink = styled.span`
  color: ${props => props.theme.palette.main.primary};

  &: hover{
    cursor: pointer;
  }
`

const Content = styled.div`
  width: ${props => props.theme.contentWidthPercent};
  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyLarge};
`

const ContactButton = styled.button`
`

const Contact = () => {
 
  return(
    <Section>
      <Content>
        <Title>
        Get in touch
        </Title>
        <ContactButton onClick={ () => window.open(MEETING_LINK) }>
          Schedule a meeting
        </ContactButton>
          Send me an e-mail at 
        <EmailLink onClick={() => {
          void navigator.clipboard.writeText("cdgold9@gmail.com")
        }
        }> cdgold9@gmail.com </EmailLink> 
        {" (Click to copy to clipboard)"}
      </Content>
    </Section>
  )
}

export default Contact
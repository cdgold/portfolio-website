import React from "react"
import styled from "styled-components"

const Page = styled.div`
  background-color: ${props => props.theme.palette.main.background};
  height: 100vh;
  width: 100vw;
  font-family: ${props => props.theme.fonts.titleFonts};
`

const LandingPage = () => {
 
  return(
    <Page>
        Landing
    </Page>
  )
}

export default LandingPage
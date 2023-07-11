import React from "react"
import styled, { useTheme } from "styled-components"
//import LoginModal from "./LoginModal.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const FooterDiv = styled.footer`
  position: absolute;
  bottom: 0;
  margin-top: 1rem;
  height: ${props => props.theme.footerHeight};
  overflow-x: hidden;
  width: 100%;
  background-color: #ffffdb;
  overflow:auto;
  z-index: 1;

  border-style: solid;
  border-width: 2px 0 0 0;
  border-color: #ffffdb;

  font-family: ${props => props.theme.fonts.bodyFonts};
  font-size: ${props => props.theme.fonts.sizes.bodyMedium};
  color: #bfbfbf;
  display: flex;
  align-items: center;
`

const FooterContent = styled.div`
  margin-left: 1.0rem;
`

const FooterLink = styled.a`
color: #bfbfbf;

&:hover {
  color: #bababa;
  pointer: click;
}

&:active {
  color: black;
}
`

const GithubIcon = styled(FooterLink)`
font-size: 20px;
margin-left: .75rem;
`

const Footer = () => {
  return(
    <FooterDiv>
      <FooterContent>
        Copyright © 2023. All rights reserved.
        <GithubIcon href="https://github.com/cdgold" >
          <FontAwesomeIcon icon={faGithub} />
        </GithubIcon>
      </FooterContent>
    </FooterDiv>
  )
}

export default Footer
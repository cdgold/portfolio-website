import React from "react"
import styled from "styled-components"

const SCROLL_ABOVE_DIV_PX = 60

const NavBar = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.palette.main.background};
  height: 3rem;
  width: 100vw;
  font-family: ${props => props.theme.fonts.bodyFonts};
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${props => props.theme.palette.common.black};
  z-index: 100;


  &: hover{
    cursor: pointer;
  }
`

const NavButton = styled.button`
  all: unset;
  font-family: ${props => props.theme.fonts.titleFonts};
  font-size: 1.25rem;
  height: min-content;
  margin: 0 .5rem;
  transition: text-shadow .2s;

  &: hover {
    cursor: pointer;
    text-shadow: -3px 3px 0px ${props => props.theme.palette.main.primary};
  }
`

const Name = styled.div`
  font-family: ${props => props.theme.fonts.headingFonts};
  justify-self: end;
  font-size: 1.25rem;
  height: min-content;
  margin: 0 1.5rem;
  transition: text-shadow .2s;

  &: hover {
    cursor: pointer;
    text-shadow: -3px 3px 0px ${props => props.theme.palette.main.primary};
  }
`

interface HeaderProps {
  divRefs: {
    about: React.RefObject<HTMLDivElement>,
    projects: React.RefObject<HTMLDivElement>,
    contact: React.RefObject<HTMLDivElement>
  }
}

const Header = (props: HeaderProps) => {
 
  return(
    <NavBar >
      <Name onClick={() => {
        window.scrollTo({ 
          top: 0, left: 0, behavior: 'smooth' })} } >
        CHRIS
      </Name>
      <NavButton onClick={() => { { 
        window.scrollTo({ 
          top: (props.divRefs.about.current?.offsetTop 
            ? props.divRefs.about.current?.offsetTop - SCROLL_ABOVE_DIV_PX 
            : undefined), left: 0, behavior: 'smooth' })} } } >
        About
      </NavButton>
      <NavButton onClick={() => {{
        window.scrollTo({ 
          top: (props.divRefs.projects.current?.offsetTop 
            ? props.divRefs.projects.current?.offsetTop - SCROLL_ABOVE_DIV_PX 
            : undefined), left: 0, behavior: 'smooth' })} } } > 
        Projects
      </NavButton>
      <NavButton onClick={() => {{
        window.scrollTo({ 
          top: (props.divRefs.contact.current?.offsetTop 
            ? props.divRefs.contact.current?.offsetTop - SCROLL_ABOVE_DIV_PX 
            : undefined), left: 0, behavior: 'smooth' })} } } >
        Contact
      </NavButton>
    </NavBar>
  )
}

export default Header
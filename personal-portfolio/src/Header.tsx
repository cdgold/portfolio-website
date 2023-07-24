import React, { useState } from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faRectangleXmark, faStar } from "@fortawesome/free-solid-svg-icons"

// figure out navigation

const SCROLL_ABOVE_DIV_PX = 60
const DESKTOP_VIEW_CUTOFF = "650px"

interface menuStyle {
  transform: string,
  boxShadow: string
}

const openMenuStyles:menuStyle = {
  transform: "translate3d(20vw, 0, 0)",
  boxShadow: "0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)"
}

const closedMenuStyles:menuStyle = {
  transform: "translate3d(100vw, 0, 0)",
  boxShadow: "none"
}

const SlidingMenuDiv = styled.div`
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    display: none;
  }
  position: fixed;
  left: 0;
  top: 0;
  transform: translate3d(100vw, 0, 0);
  width: 80vw;
  height: 100vh;
  background-color: ${props => props.theme.palette.main.background};
  z-index: 100;

  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: center;
  gap: 1.5rem;
  transition: transform .8s cubic-bezier(.15,.5,.3,1), box-shadow .8s cubic-bezier(.15,.5,.3,1);
  color: black;
`

const CloseButton = styled.div`
  text-align: right;
  padding-right: 1.5rem;
  
  &:hover{
    cursor: pointer;
  }
`

const MenuLink = styled.div`
font-family: ${props => props.theme.fonts.titleFonts};
font-size: 1.5rem;
`

interface SlidingMenuProps {
  menuStyling: menuStyle,
  setMenuStyling: React.Dispatch<React.SetStateAction<menuStyle>>,
  scrollToAbout: () => void,
  scrollToProjects: () => void,
  scrollToContact: () => void,
}

const SlidingMenu = (props : SlidingMenuProps) => {

  const handleNavigate = (scrollTarget : string) => {
    props.setMenuStyling(closedMenuStyles)
    if (scrollTarget === "about"){
      props.scrollToAbout()
    }
    if (scrollTarget === "projects"){
      props.scrollToProjects()
    }
    if (scrollTarget === "contact"){
      props.scrollToContact()
    }
  }

  return(
    <SlidingMenuDiv style={props.menuStyling}>
      <CloseButton onClick={() => props.setMenuStyling(closedMenuStyles)}>
        <FontAwesomeIcon icon={faRectangleXmark} />
      </CloseButton>
      <MenuLink onClick={() => handleNavigate("about")}>
        About
      </MenuLink>
      <MenuLink onClick={() => handleNavigate("projects")}>
        Projects
      </MenuLink>
      <MenuLink onClick={() => handleNavigate("contact")}>
        Contact
      </MenuLink>
    </SlidingMenuDiv>
  )
}

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
  align-items: center;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${props => props.theme.palette.common.black};
  z-index: 100;

  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    justify-content: center;
  }
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    justify-content: space-between;
  }

  &: hover{
    cursor: pointer;
  }
`

const NavButton = styled.button`
  @media (max-width: ${DESKTOP_VIEW_CUTOFF}) {
    display: none;
  }

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

const MenuButton = styled.button`
  all: unset;
  font-family: ${props => props.theme.fonts.titleFonts};
  font-size: 1.25rem;
  height: min-content;
  margin-right: 1.5rem;
  
  @media (min-width: ${DESKTOP_VIEW_CUTOFF}) {
    display: none;
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
  const [menuStyling, setMenuStyling] = useState<menuStyle>(closedMenuStyles)
 
  const scrollToAbout = () => {
    window.scrollTo({ 
      top: (props.divRefs.about.current?.offsetTop 
        ? props.divRefs.about.current?.offsetTop - SCROLL_ABOVE_DIV_PX 
        : undefined), left: 0, behavior: 'smooth' })
  } 

  const scrollToProjects = () => {
    window.scrollTo({ 
      top: (props.divRefs.projects.current?.offsetTop 
        ? props.divRefs.projects.current?.offsetTop - SCROLL_ABOVE_DIV_PX 
        : undefined), left: 0, behavior: 'smooth' })
  } 

  const scrollToContact = () => {
    window.scrollTo({ 
      top: (props.divRefs.contact.current?.offsetTop 
        ? props.divRefs.contact.current?.offsetTop - SCROLL_ABOVE_DIV_PX 
        : undefined), left: 0, behavior: 'smooth' })
  } 
  

  return(
    <NavBar >
      <Name onClick={() => {
        window.scrollTo({ 
          top: 0, left: 0, behavior: 'smooth' })} } >
        CHRIS
      </Name>
      <NavButton onClick={() => scrollToAbout() } >
        About
      </NavButton>
      <NavButton onClick={() => {() => scrollToProjects() } } > 
        Projects
      </NavButton>
      <NavButton onClick={() => scrollToContact() }>
        Contact
      </NavButton>
      <MenuButton onClick={ () => setMenuStyling(openMenuStyles) }>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <SlidingMenu menuStyling={menuStyling} 
        setMenuStyling={setMenuStyling} 
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
    </NavBar>
  )
}

export default Header
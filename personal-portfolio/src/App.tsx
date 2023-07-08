import React, { useRef } from 'react'
import styled from "styled-components"
import LandingBanner from "./LandingBanner"
import Header from "./Header"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import { faReact, faHtml5, faNodeJs, faCss3Alt, faPython, faJava, faSquareJs } from "@fortawesome/free-brands-svg-icons"

// type JSON
// import JSON
// put project type as component prop

const Page = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
`

const Gradient = styled.div`
  width: 100vw;
  height: 10rem;
  background-image: linear-gradient(${props => props.theme.palette.main.background}, ${props => props.theme.palette.secondary.background});
`

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <Page>
      <Header divRefs={{"about": aboutRef, "projects": projectsRef, "contact": contactRef}} />
      <LandingBanner />
      <Gradient/>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <button onClick={() => { aboutRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' })} }></button>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </Page>
  )
}

export default App

import React from "react"
import styled, { keyframes } from "styled-components"
import sunPng from "./assets/sun.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const FULL_DESKTOP_CUTOFF = "1250px"
const MOBILE_CUTOFF = "650px"
const FULL_RAY_RADIUS_PX = 275
const HALF_RAY_RADIUS_PX = 200
const CLOSE_RAY_RADIUS_PX = 140

const lift = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(10px, -10px, 0);
    color: yellow;
    text-shadow: -5px 4px 3px rgb(0, 0, 0, .3);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`

const spinAround = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg);
  }
`

const growLetterSpacing = keyframes`
  0% {
    letter-spacing: 0rem;
  }
  50% {
    letter-spacing: .15rem;
  }
  100% {
    letter-spacing: 0rem;
  }
`

const shimmer = keyframes`
  0% {
    color: ${props => props.theme.palette.main.primary};
  }
  15% {
    color: #ffffde;
  }
  30% {
    color: yellow;
  }
  100% {
    color: ${props => props.theme.palette.main.primary};
  }
`

const DisplayOnCompact = styled.span`
  @media (min-width: ${FULL_DESKTOP_CUTOFF}) {
    display: none;
  }
`

const DisplayOnDesktop = styled.span`
  @media (max-width: ${FULL_DESKTOP_CUTOFF}) {
    display: none;
  }
`

const Page = styled.div`
  background-color: ${props => props.theme.palette.main.background};
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  @media (min-width: ${MOBILE_CUTOFF}) {
    grid-template-columns: 43% 57%;
    grid-template-rows: 40% 60%;
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    grid-template-columns: 60% 40%;
    grid-template-rows: 60% 40%;
  }
`

const NameContainer = styled.div`
grid-column: 1;
grid-row: 2;
align-self: start;
justify-self: end;
`

const Name = styled.div`
  font-family: ${props => props.theme.fonts.headingFonts};
  @media (min-width: ${FULL_DESKTOP_CUTOFF}) {
    font-size: 70px;
  }
  @media (min-width: ${MOBILE_CUTOFF}) and (max-width: ${FULL_DESKTOP_CUTOFF}) {
    font-size: 60px;
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    font-size: 45px;
  }
  
  line-height: 100%;
  margin-bottom: 10px;
  text-shadow: -5px 4px 0px rgb(255, 255, 0, .65);
  text-align: right;
  z-index: 10;
`

const Subname = styled.div`
  font-family: ${props => props.theme.fonts.titleFonts};
  line-height: 100%;
  @media (min-width: ${FULL_DESKTOP_CUTOFF}) {
    font-size: 35px;
  }
  @media (min-width: ${MOBILE_CUTOFF}) and (max-width: ${FULL_DESKTOP_CUTOFF}) {
    font-size: 28px;
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    font-size: 22px;
  }

  text-align: right;
  text-shadow: -5px 4px 0px ${props => props.theme.palette.main.primary};
  user-select: none;
`

const Letter = styled.span`
display: inline-block;
animation: ${lift} 1.8s;
animation-iteration-count: 1;

  &:nth-child(2) {
    animation-delay: .2s;
  }
  &:nth-child(3) {
    animation-delay: .3s;
  }
  &:nth-child(4) {
    animation-delay: .4s;
  }
  &:nth-child(5) {
    animation-delay: .5s;
  }
  &:nth-child(6) {
    animation-delay: .6s;
  }
  &:nth-child(7) {
    animation-delay: .7s;
  }
  &:nth-child(8) {
    animation-delay: .8s;
  }
  &:nth-child(9) {
    animation-delay: .9s;
  }
  &:nth-child(10) {
    animation-delay: 1s;
  }

  transition: all .5s;
  user-select: none;

  &:hover {
    transform: translate3d(10px, -10px, 0);
    color: yellow;
    text-shadow: -5px 4px 3px rgb(0, 0, 0, .3);
  }
`

//  animation: ${spin} 20s linear infinite;

const SunImg = styled.div`
position: absolute;
top: 50%;
left: 50%;
translate: -50% -50%;
@media (min-width: ${FULL_DESKTOP_CUTOFF}) {
  height: 250px;
  width: 250px;
}
@media (min-width: ${MOBILE_CUTOFF}) and (max-width: ${FULL_DESKTOP_CUTOFF}) {
  height: 200px;
  width: 200px;
}
@media (max-width: ${MOBILE_CUTOFF}) {
  height: 160px;
  width: 160px;
}

background-color: ${props => props.theme.palette.main.primary};
border-radius: 50%;
`

const SunContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 2;
  display: grid;
  justify-content: center;
  position: relative;
  left: 20%;
  top: -20%;
`
// ${props => props.theme.palette.main.primary}
const RayWrapper = styled.div`
  position: absolute;
  inset: 0;
  animation-fill-mode: forwards;
  animation: ${spinAround} 120s infinite linear;
`


// 

//

interface RayProps {
  $raynum: number;
}

const SunRay = styled.div<RayProps>`
color: ${props => props.theme.palette.main.primary};
opacity: 85%;
direction: rtl;
width: 80px;
  font-family: ${props => props.theme.fonts.titleFonts};
  line-height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  @media (min-width: ${FULL_DESKTOP_CUTOFF}) {
    margin-left: ${props => Math.sin(((Math.PI) / 8) * props.$raynum) * FULL_RAY_RADIUS_PX}px;
    margin-top: ${props => Math.cos(((Math.PI) / 8) * props.$raynum) * FULL_RAY_RADIUS_PX}px;
    font-size: 34px;
    letter-spacing: 15px;
  }
  @media (min-width: ${MOBILE_CUTOFF}) and (max-width: ${FULL_DESKTOP_CUTOFF}) {
    margin-left: ${props => Math.sin(((Math.PI) / 8) * props.$raynum) * HALF_RAY_RADIUS_PX}px;
    margin-top: ${props => Math.cos(((Math.PI) / 8) * props.$raynum) * HALF_RAY_RADIUS_PX}px;
    letter-spacing: 10px;
    font-size: 28px;
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    margin-left: ${props => Math.sin(((Math.PI) / 8) * props.$raynum) * CLOSE_RAY_RADIUS_PX}px;
    margin-top: ${props => Math.cos(((Math.PI) / 8) * props.$raynum) * CLOSE_RAY_RADIUS_PX}px;
    letter-spacing: 7px;
    font-size: 22px;
  }
  transform: rotate(${props => (-360 / 16) * (props.$raynum + 4)}deg);
  animation-delay: ${props => props.$raynum * 1}s;
  animation-fill-mode: backwards;
  user-select: none;
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .5rem;
  margin-top: .75rem;
  @media (min-width: ${MOBILE_CUTOFF}) {
    font-size: 32px;
  }
  @media (max-width: ${MOBILE_CUTOFF}) {
    font-size: 25px;
  }
`

const ButtonLink = styled.a`
color: ${props => props.theme.palette.common.black};
transition: all .15s linear;  

&:hover {
  transform: translate3d(5px, -5px, 0);
  color: yellow;
  cursor: pointer;
}
`

const LandingPage = () => {
 
  return(
    <Page>
      <SunContainer>
        <SunImg />
        <RayWrapper>
          <SunRay $raynum={1} > REACT.JS </SunRay>
          <SunRay $raynum={2} > PYTHON </SunRay>
          <SunRay $raynum={3} > NODE.JS </SunRay>
          <SunRay $raynum={4} > HTML/CSS </SunRay>
          <SunRay $raynum={5} > JAVA </SunRay>
          <SunRay $raynum={6} > MONGODB </SunRay>
          <SunRay $raynum={7} > POSTGRES </SunRay>
          <SunRay $raynum={8} > ++C</SunRay>
          <SunRay $raynum={9} > REACT.JS </SunRay>
          <SunRay $raynum={10} > PYTHON </SunRay>
          <SunRay $raynum={11} > NODE.JS </SunRay>
          <SunRay $raynum={12} > HTML/CSS </SunRay>
          <SunRay $raynum={13} > JAVA </SunRay>
          <SunRay $raynum={14} > MONGODB </SunRay>
          <SunRay $raynum={15} > POSTGRES </SunRay>
          <SunRay $raynum={16} > ++C</SunRay>
        </RayWrapper>
      </SunContainer>
      <NameContainer>
        <Name>
          <Letter>
            C
          </Letter>
          <Letter>
            h
          </Letter>
          <Letter>
            r
          </Letter>
          <Letter>
            i
          </Letter>
          <Letter>
            s
          </Letter>
          <span>
            <DisplayOnDesktop>&nbsp;</DisplayOnDesktop>
            <DisplayOnCompact><br></br></DisplayOnCompact>
          </span>
          <Letter>
            G
          </Letter>
          <Letter>
            o
          </Letter>
          <Letter>
            l
          </Letter>
          <Letter>
            d
          </Letter>
        </Name>
        <Subname>
          Full Stack <DisplayOnCompact><br></br></DisplayOnCompact> Developer
        </Subname>
        <ButtonRow>
          <ButtonLink href="https://github.com/cdgold">
            <FontAwesomeIcon icon={faGithub} />
          </ButtonLink>
          <ButtonLink href="https://www.linkedin.com/in/chris-gold-59399122a/">
            <FontAwesomeIcon icon={faLinkedin} />
          </ButtonLink>
        </ButtonRow>
      </NameContainer>
    </Page>
  )
}

export default LandingPage
import React, { ReactNode } from "react"
import styled from "styled-components"

interface HighlightContainerProps{
  $tiltdegree?: number;
}

const HighlightContainer = styled.span<HighlightContainerProps>`
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
    transform: rotate(${p => (p.$tiltdegree) ? p.$tiltdegree : 0}deg);
    top: -1px;
    left: -1px;
    border-radius: 20% 10% 10% 20%;
    z-index: 0;
    padding: 10px 3px 3px 10px;
  }

`

const HighlightSpan = styled.span`
  position: relative;
`

interface HighlightProps{
  $tiltdegree?: number;
  children?: ReactNode;
}

const Highlight = (props: HighlightProps) => {
  return(
    <HighlightContainer $tiltdegree={props.$tiltdegree} >
      <HighlightSpan>
        {props.children}
      </HighlightSpan>
    </HighlightContainer>
  )
}

export {Highlight}
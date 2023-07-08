import React from "react"
import styled from "styled-components"

const ExpressSpan = styled.span`
  color: ${props => props.theme.palette.icons.express};
  font-family: ${props => props.theme.fonts.bodyFonts};
  user-select: none;
`

const ExpressIcon = () => {
  return(
    <ExpressSpan>
     e
    </ExpressSpan>
  )
}

const CPlusPlusSpan = styled.span`
color: ${props => props.theme.palette.icons.cplusplus};
font-family: sans-serif;
font-weight: 900;
font-size: 18px;
user-select: none;
`

const CPlusPlusIcon = () => {
  return(
    <CPlusPlusSpan>
     C++
    </CPlusPlusSpan>
  )
}

export { ExpressIcon, CPlusPlusIcon }
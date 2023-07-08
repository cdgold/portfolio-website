import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    main: {
      background: "#BFEAFF",
      primary: '#009BF9',
      secondary: '#EFFBFF',
      accent: "#FCFCD4",
      contrastText: '#000000'
    },
    secondary: {
      background: "#ffffff",
      primary: '#9FE7FF',
      secondary: '#00C9B0',
      accent: "#FFC9C7",
      contrastText: '#000000'
    }
  },
  fonts: {
    headingFonts: "'Bungee Shade', cursive",
    subheadingFonts: "'Bungee Inline', cursive",
    titleFonts: "'Bungee', cursive",
    bodyFonts: "'Cabin', sans-serif",
    sizes: {
      bodySmall: ".8rem",
      bodyMedium: "1rem",
      bodyLarge: "1.8rem",
      subheading: "4rem",
      titleTiny: "2.3rem",
      titleSmall: "2.7rem",
      titleMedium: "3.0rem",
      titleLarge: "3.3rem"
    }
  }
}

export default defaultTheme
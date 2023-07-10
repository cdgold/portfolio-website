import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff'
    },
    main: {
      background: "#BFEAFF",
      primary: "rgb(255, 255, 0, 1)",
      secondary: "rgb(255, 255, 0, .3)",
      accent: "#FCFCD4",
      contrastText: '#000000'
    },
    secondary: {
      background: "#ffffff",
      primary: '#9FE7FF',
      secondary: '#00C9B0',
      accent: "#FFC9C7",
      contrastText: '#000000',
      linkText: ""
    },
    icons: {
      react: "#4d91ff",
      html: "#ffc012",
      sql: "#336791",
      mongoDB: "#589636",
      node: "#215732",
      css: "#264de4",
      python: "#ffd343",
      java: "#fc0303",
      express: "#808080",
      cplusplus: "#00349c",
      typescript: "#007acc",
      javascript: "#F0DB4F"
    }
  },
  fonts: {
    headingFonts: "'Bungee Shade', sans-serif",
    subheadingFonts: "'Bungee Inline', sans-serif",
    titleFonts: "'Bungee', sans-serif",
    bodyFonts: "'Cabin', sans-serif",
    sizes: {
      bodySmall: "1rem",
      bodyMedium: "1.3rem",
      bodyLarge: "1.8rem",
      subheading: "4rem",
      titleTiny: "2.3rem",
      titleSmall: "2.7rem",
      titleMedium: "3.0rem",
      titleLarge: "3.3rem"
    }
  },
  contentWidthPercent: "90%",
}

export default defaultTheme
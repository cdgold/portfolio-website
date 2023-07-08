// styled.d.ts
import 'styled-components';


export enum iconTypes { 
  React = "react",
  Html = "html",
  Sql = "sql",
  Mongodb = "mongodb",
  Node = "node",
  Css = "css",
  Python = "python",
  Java = "java",
  Express = "express",
  CPlusPlus = "cplusplus",
  Typescript = "typescript",
  Javascript = "javascript"
}

interface IPalette {
  background: string,
  primary: string,
  secondary: string,
  accent: string,
  contrastText: string,
}



declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
        common: {
          black: string,
          white: string
        },
        main: IPalette,
        secondary: IPalette,
        icons: {
          react: string,
          html: string,
          sql: string,
          mongoDB: string,
          node: string,
          css: string,
          python: string,
          java: string,
          express: string,
          cplusplus: string,
          typescript: string,
          javascript: string
        }
      },
    fonts: {
      headingFonts: string,
      subheadingFonts: string,
      titleFonts: string,
      bodyFonts: string,
      sizes: {
        bodySmall: string,
        bodyMedium: string,
        bodyLarge: string,
        titleTiny: string,
        subheading: string,
        titleSmall: string,
        titleMedium: string,
        titleLarge: string
      }
    }
  }
}
// styled.d.ts
import 'styled-components';

interface IPalette {
  background: string,
  primary: string,
  secondary: string,
  accent: string,
  contrastText: string,
  linkText?: string
}

interface fontSizes {
  bodySmall: string,
  bodyMedium: string,
  bodyLarge: string,
  titleTiny?: string,
  subheading?: string,
  titleSmall: string,
  titleMedium: string,
  titleLarge: string
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
      sizes: fontSizes,
      mobileSizes: fontSizes
    },
    contentWidthPercent: string;
    mobileContentWidthPercent: string;
    footerHeight: string;
  }
}
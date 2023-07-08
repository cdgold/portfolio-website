// styled.d.ts
import 'styled-components';
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
        secondary: IPalette
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
interface IColorObject {
  light: string;
  lighter: string;
  main: string;
  dark: string;
}

type IColor = string;

interface IColors {
  primary: IColorObject;
  secondary: IColorObject;
  danger: IColorObject;
  success: IColorObject;
  background: IColor;
}

interface ITypography {
  primary: string;
}

interface IShadow {
  main: string;
  dark: string;
}

interface ITheme {
  colors: IColors;
  typography: ITypography;
  shadows: IShadow;
}

export type { ITheme };

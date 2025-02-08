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
  background: IColor;
}

interface ITheme {
  colors: IColors;
}

export type { ITheme };

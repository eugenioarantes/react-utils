import 'styled-components';

/*
  Fill in theses interfaces as the application accepts new base configs
  on it's theme
*/

declare module 'styled-components' {
  export interface Colors {
    primary: string;
    primaryMediumLighter: string;
    primaryLighter: string;
    grayBorder: string;
    blueBorder: string;
    disabled: string;
    action: string;
    actionHover: string;
    actionInvertedHover: string;
    actionText: string;
    informativeColor: string;
    informativeText: string;
    validText: string;
    valid: string;
    invalid: string;
    invalidHover: string;
    invalidBrighter: string;
    otherColor: string;
    otherHover: string;
    otherText: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textPlaceholder: string;
    textSpecial: string;
    textSpecialBrighter: string;
    textWhite: string;
    transparent: string;
    background: string;
    modalBackground: string;
    lineBackground: string;
    grayLabel: string;
    darkBackground: string;
    graySpan: string;
    error: string;
    ready: string;
    processing: string;
    pending: string;
    errorShadow: string;
    readyShadow: string;
    processingShadow: string;
    pendingShadow: string;
    darkPlaceholder: string;
    darkBlueButton: string;
    secondaryLighter: string;
  }

  interface Fonts {
    roboto: string;
    poppins: string;
  }

  interface Gradients {
    main: string;
    lighter: string;
    darker: string;
    select: string;
    primaryBlue: string;
  }

  interface BoxShadows {
    light: string;
    medium: string;
    strong: string;
    hover: string;
    button: string;
  }

  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    gradients: Gradients;
    boxShadows: BoxShadows;
  }
}

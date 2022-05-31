import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: 'hsl(205, 98%, 51%)',
    primaryMediumLighter: 'hsl(205, 98%, 60%)',
    primaryLighter: 'hsl(205, 98%, 70%)',
    secondaryLighter: '#058de9',

    grayBorder: '#d9d9d9',
    blueBorder: '#296795',

    disabled: '#EDEBEB',

    action: '#000000',
    actionHover: '#696969',
    actionText: '#fff',
    actionInvertedHover: '#EDEBEB',

    informativeColor: '#424151',
    informativeText: '#aaa',

    validText: '#fff',
    valid: '#19C29B',

    invalid: '#c53030',
    invalidHover: '#FFEAEA',
    invalidBrighter: '#E14141',

    error: '#f64f4f',
    ready: '#2ab478',
    processing: '#ffb800',
    pending: '#656565',

    errorShadow: 'rgba(246, 79, 79, 0.63)',
    readyShadow: 'rgba(42, 180, 120, 0.63)',
    processingShadow: 'rgba(255, 184, 0, 0.63)',
    pendingShadow: 'rgba(101, 101, 101, 0.63)',

    otherColor: '#979797',
    otherHover: '#0A4672',
    otherText: '#585858',

    grayLabel: '#323232',
    graySpan: '#696969',
    darkPlaceholder: '#444b62',
    darkBlueButton: '#0471ba',

    background: '#f5fafd',

    textPrimary: '#296795',
    textSecondary: '#656565',
    textTertiary: '#424151',
    textPlaceholder: '#d7d7d7',
    textSpecial: '#6b6b6b',
    textSpecialBrighter: '#0695FD',
    textWhite: '#fff',

    transparent: 'transparent',

    modalBackground: 'rgba(0, 0, 0, 0.53)',
    lineBackground: 'rgba(41, 103, 149, 0.15)',
    darkBackground: 'hsl(0, 0%, 15%)',
  },

  gradients: {
    main: 'linear-gradient(to top, rgba(245, 250, 253, 0) -0.64%, #edf7ff 47.34%)',
    lighter: 'linear-gradient(135deg, #0A4672 0%, #1E5A85 100%)',
    darker: 'linear-gradient(135deg, #1E5A85 0%, #373A3D 100%)',
    select: 'linear-gradient(top to bottom, #fff, #EDEBEB, #fff)',
    primaryBlue:
      'linear-gradient(180deg, #CEECFF 8.66%, rgba(6, 149, 253, 0.75) 39.84%, #0695FD 99.17%)',
  },

  boxShadows: {
    light: '7px 7px 12px 3px rgba(102,102,102,0.04)',
    medium: '0px 2px 26px 2px rgba(41,103,149,0.15);',
    strong: '0px 2px 15px 2px rgba(0,0,0,0.15)',
    hover: '0px 2px 20px 0px rgba(102,102,102,0.20)',
    button: '0px 4px 15px 0px rgba(0, 0, 0, 0.15)',
  },

  fonts: {
    roboto: 'Roboto, sans-serif',
    poppins: 'Poppins, sans-serif',
  },
};

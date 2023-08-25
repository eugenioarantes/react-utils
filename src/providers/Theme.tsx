import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, useContext, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

type CustomThemeContext = Record<string, never>;

const customThemeContext = createContext({} as CustomThemeContext);

const context = {};

// extensions go here
// https://mui.com/material-ui/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: `#0695FD`,
    },
  },
});

export function AppThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <customThemeContext.Provider value={context}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </customThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export function useCustomTheme(): CustomThemeContext {
  // eslint-disable-next-line no-shadow
  const context = useContext(customThemeContext);

  if (!context.appTheme)
    throw new Error('Please make sure to use Custom Theme hook within its provider');

  return context;
}

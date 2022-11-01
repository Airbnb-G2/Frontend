import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import customShadows from './customShadows';
import componentsOverride from './overrides';
import GlobalStyles from './globalStyles';

const ThemeProvider = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      customShadows,
      breakpoints: {
        values: {
          mobile: 0,
          tablet: 768,
          desktop: 1200,
        },
      },
    }),
    [],
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;

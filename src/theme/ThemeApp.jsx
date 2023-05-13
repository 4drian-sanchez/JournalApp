import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { purpleTheme } from './purpleTheme';

export const ThemeApp = ( { children } ) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
    <CssBaseline />
    { children }
  </ThemeProvider>
  )
}

import React from 'react'
import './App.css'
import { Box, Button, Container, createTheme, ThemeProvider, useTheme } from '@mui/material'
import { amber, deepOrange, grey, lime, orange, purple } from '@mui/material/colors'
import Header from './sections/Header'
import MainContent from './sections/MainContent'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    backgroundImage: string
    mainBackground: string
    weatherColor: string
    weatherDetailsColor: string
  }
}

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
})

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = React.createContext(() => {})
function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  theme = createTheme(theme, {
    status: {
      danger: orange[500],
    },
    typography: {
      fontFamily: 'NotoSans',
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: { main: 'rgba(108, 64, 181, 1)' },
            secondary: { main: '#666' },
            backgroundImage: 'url(/bg-light.png)',
            mainBackground: 'rgba(255, 255, 255, 0.20)',
            weatherColor: 'rgba(108, 64, 181, 1)',
            weatherDetailsColor: '#666',
            background: {
              paper: 'rgba(255, 255, 255, 0.2)',
            },
            text: {
              primary: '#000',
            },
          }
        : {
            // palette values for dark mode
            primary: { main: 'rgba(26, 26, 26, 0.50)' },
            secondary: { main: '#666' },
            backgroundImage: 'url(/bg-dark.png)',
            mainBackground: 'rgba(26, 26, 26, 0.30)',
            weatherColor: 'white',
            weatherDetailsColor: 'white',
            background: {
              paper: 'rgba(26, 26, 26, 0.50)',
            },
            text: {
              primary: '#fff',
              secondary: '#666',
            },
          }),
    },
  })

  return (
    <ColorModeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundImage: theme.palette.backgroundImage,
            height: '100%',
            backgroundSize: 'cover',
          }}
        >
          <Button
            variant='contained'
            onClick={toggleColorMode}
            sx={{ position: 'absolute', left: '1rem', top: '1rem' }}
          >
            Toggle Theme
          </Button>
          <Container maxWidth='md' sx={{ padding: '4.8rem 1rem' }}>
            <div>
              <Header />
              <MainContent />
            </div>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

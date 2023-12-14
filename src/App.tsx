import React from 'react'
import './App.css'
import { Box, Button, Container, createTheme, ThemeProvider, useTheme } from '@mui/material'
import { amber, deepOrange, grey, lime, orange, purple } from '@mui/material/colors'
import Search from './components/Search/Search'

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
  }
}

const ColorModeContext = React.createContext(() => {})
function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = createTheme({
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
            backgroundImage: 'url(/bg-light.png)',
            background: {
              paper: 'rgba(255, 255, 255, 0.2)',
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            backgroundImage: 'url(/bg-dark.png)',
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
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
            height: '100vh',
            backgroundSize: 'cover',
          }}
        >
          <Container>
            <Button variant='contained' onClick={toggleColorMode}>
              Toggle Theme
            </Button>
            <div>
              <Search />
            </div>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App

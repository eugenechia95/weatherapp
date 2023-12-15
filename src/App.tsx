import React from 'react'
import './App.css'
import { Box, Button, Container, createTheme, ThemeProvider } from '@mui/material'
import Header from './sections/Header'
import MainContent from './sections/MainContent'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppContextProvider } from './context/AppContext'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    backgroundImage: string
    mainBackground: string
    weatherColor: string
    weatherDetailsColor: string
  }
}

let theme = createTheme({})

const queryClient = new QueryClient()

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  theme = createTheme(theme, {
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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <Box
            sx={{
              backgroundImage: theme.palette.backgroundImage,
              height: '100%',
              minHeight: '100vh',
              backgroundSize: 'cover',
            }}
          >
            <Button
              variant='contained'
              onClick={toggleColorMode}
              sx={{ position: 'absolute', left: '1rem', top: '1rem' }}
            >
              {`${theme.palette.mode} Theme`}
            </Button>
            <Container maxWidth='md' sx={{ padding: '4.8rem 1rem' }}>
              <div>
                <Header />
                <MainContent />
              </div>
            </Container>
          </Box>
        </AppContextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App

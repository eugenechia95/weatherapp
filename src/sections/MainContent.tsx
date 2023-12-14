import { Stack, useTheme } from '@mui/material'
import Weather from '../components/Weather/Weather'
import SearchHistory from '../components/SearchHistory/SearchHistory'

const MainContent = () => {
  const theme = useTheme()

  return (
    <Stack
      gap={4}
      sx={{
        padding: '2.8rem 3rem',
        borderRadius: '2.5rem',
        border: '1px solid rgba(255, 255, 255, 0.20)',
        backdropFilter: 'blur(10px)',
        backgroundColor: theme.palette.mainBackground,
        marginTop: '7rem',
      }}
    >
      <Weather />
      <SearchHistory />
    </Stack>
  )
}

export default MainContent

import { Stack, Typography, useTheme } from '@mui/material'
import SearchHistoryRecord from './SearchHistoryRecord'

const SearchHistory = () => {
  const theme = useTheme()

  return (
    <Stack
      sx={{
        padding: '1.44rem 1.62rem',
        borderRadius: '1.5rem',
        backgroundColor: theme.palette.mainBackground,
      }}
      spacing={1.5}
    >
      <Typography color='textPrimary'>Search History</Typography>
      <Stack spacing={2}>
        <SearchHistoryRecord />
        <SearchHistoryRecord />
      </Stack>
    </Stack>
  )
}

export default SearchHistory
